interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_IS_LOCAL: boolean
    readonly VITE_BACKEND_HOST: string
    readonly VITE_APP_VERSION: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
