import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://dall06.github.io/react-meals/',
  plugins: [react()]
});
