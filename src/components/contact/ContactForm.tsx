import { useState, type FormEvent } from 'react'
import styles from './ContactForm.module.css'

// Public Formspree form id (e.g. "xdorwkzg") — NOT an email address, so nothing sensitive
// ships in the bundle (architecture doc §8.1). Set VITE_FORMSPREE_ID in .env to enable submission.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = () => {
    const next: Record<string, string> = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    // Honeypot: bots fill hidden fields; a filled _gotcha means silently "succeed" and drop it.
    const form = event.currentTarget
    if ((form.elements.namedItem('_gotcha') as HTMLInputElement)?.value) {
      setStatus('success')
      return
    }

    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (response.ok) {
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={styles.success} role="status">
        Thanks for reaching out! I&apos;ll get back to you soon.
      </p>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.field}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </label>

      {/* Honeypot — visually hidden, off the tab order; real users never fill it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className={styles.error} role="alert">
          {FORMSPREE_ID
            ? 'Something went wrong. Please try again in a moment.'
            : 'The contact form isn’t configured yet. Please reach out via GitHub or LinkedIn below.'}
        </p>
      )}
    </form>
  )
}
