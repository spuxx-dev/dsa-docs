// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: 'https://spuxx1701.github.io',
  base: 'dsa-docs',
  integrations: [solidJs()],
});
