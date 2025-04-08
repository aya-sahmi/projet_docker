import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { webcrypto } from 'crypto'

// Polyfill pour crypto si nécessaire
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto
}

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    'global': 'globalThis'
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  }
})
