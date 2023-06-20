import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      screens: path.resolve(__dirname, './src/screens'),
      assets: path.resolve(__dirname, './src/assets'),
      routes: path.resolve(__dirname, './src/routes'),
      styles: path.resolve(__dirname, './src/styles'),
      store: path.resolve(__dirname, './src/store')
    }
  }
});
