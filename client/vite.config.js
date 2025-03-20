import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:4000',
        secure:false,
        
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})