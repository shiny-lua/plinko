import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    restoreMocks: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  },

});