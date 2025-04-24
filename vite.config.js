import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'https://github.com/agustin-source/portfolio.git',
  plugins: [vue()],
})