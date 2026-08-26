import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-redirects-file',
      closeBundle() {
        const redirectsPath = path.resolve(__dirname, 'dist/_redirects');
        if (fs.existsSync(redirectsPath)) {
          fs.unlinkSync(redirectsPath);
          console.log('Successfully purged dist/_redirects');
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
