import { useTypedText } from '../../hooks/useTypedText'

interface TypedTextRevealProps {
  text: string
  speedMs: number
  className?: string
}

export function TypedTextReveal({ text, speedMs, className }: TypedTextRevealProps) {
  const typed = useTypedText(text, speedMs)
  // aria-label carries the full text so screen readers aren't fed one character at a time
  return (
    <p className={className} style={{ whiteSpace: 'pre-line' }} aria-label={text}>
      <span aria-hidden="true">{typed}</span>
    </p>
  )
}
