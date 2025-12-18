/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
    plugins: [react()],
    test: {
        setupFiles: 'test/setup.ts',
        environment: 'happy-dom',
        clearMocks: true,
    },
}))
