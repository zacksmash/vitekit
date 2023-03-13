import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
const path = require('path')

export default defineConfig({
  resolve:{
    alias:{
      '@site' : path.resolve(__dirname, './resources'),
      '@': path.resolve(__dirname, './resources/js')
    }
  },
  plugins: [laravel(['resources/js/site.js'])]
})
