import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.js' },
  format: ['esm', 'cjs'],
  outExtension({ format }) {
    return { js: format === 'cjs' ? '.cjs' : '.js' };
  },
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  loader: { '.jsx': 'jsx' },
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
