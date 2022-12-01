/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MOCK: boolean;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
