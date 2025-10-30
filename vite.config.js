import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Movie-Wishlist-website/', // 👈 add this line (must match your repo name)
})
