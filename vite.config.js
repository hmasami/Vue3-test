import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/Vue3-test/', // ここがGitHub Pagesの公開パス
  plugins: [vue()],
})
