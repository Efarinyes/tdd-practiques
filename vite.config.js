import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // configuraciĆ³ de vitest
    environment: 'happy-dom'
  }
})
