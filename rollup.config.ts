import commonjs from '@rollup/plugin-commonjs'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [commonjs()]
}