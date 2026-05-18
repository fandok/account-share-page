/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACCOUNTS: string;
  readonly VITE_ACCESS_PIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
