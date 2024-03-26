/* global __dirname */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

// import pkg from './package.json';
// import babel from '@rollup/plugin-babel';

// const banner = `
// /*!
// * getdomdata v${pkg.version}
// * https://github.com/lemon3
// */
// `;

export default defineConfig({
  build: {
    target: 'esnext', // es2015
    // minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/getDomData.js'),
      name: 'getDomData',
      // formats: ['es', 'umd', 'iife', 'cjs'],
      fileName: (format) => {
        format = 'es' === format ? '' : `.${format}`;
        return `getdomdata${format}.js`;
      },
    },
    copyPublicDir: false,
    rollupOptions: {
      // input: ['./index.html'],
      output: {
        // banner,
        footer: `
          if (globalThis.getDomData) {
            for (const key of Object.keys(globalThis.getDomData)) {
              globalThis[key] = globalThis.getDomData[key]
            }
          }
        `,
      },
    },
  },
  // plugins: [babel({ babelHelpers: 'bundled' })],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8', // 'istanbul' or 'v8'
      exclude: [...configDefaults.exclude, '_notes/**', 'test/*.bench.*'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
