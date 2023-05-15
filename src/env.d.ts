interface ImportMetaEnv {
	readonly VITE_APP_FORMKEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
