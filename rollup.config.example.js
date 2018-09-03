import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/example/index.tsx',
  output: [
    {
      file: 'example/index.js',
      format: 'umd',
      sourcemap: 'inline',
      name: 'johnnymnemonic',
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfigOverride: { compilerOptions: { declaration: false } },
    }),
    nodeResolve({
      browser: true,
    }),
    json(),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    babel({
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};