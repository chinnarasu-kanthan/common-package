const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      inject: true,
      extract: false
    })
  ]
};