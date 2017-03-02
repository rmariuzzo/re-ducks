const rollup = require('rollup').rollup
const nodeResolve = require('rollup-plugin-node-resolve')

rollup({
  entry: './lib/index.js',
  plugins: [ nodeResolve() ]
})
  .then(bundle => bundle.write({ dest: 'dist/re-ducks.js', format: 'cjs' }))
  .catch(err => console.error(err))
