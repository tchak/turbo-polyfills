import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
    }),
  ],
};
