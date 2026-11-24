import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js', 'src/icons.js'],
  format: ['cjs', 'esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  publicDir: 'src/styles',
  loader: {
    '.js': 'jsx',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
