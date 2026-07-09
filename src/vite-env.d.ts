/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public Formspree form id for the contact form (see .env.example). */
  readonly VITE_FORMSPREE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
