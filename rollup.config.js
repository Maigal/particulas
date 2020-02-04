import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default [{
    input: './src/main.js',
    output: {
        file: './build/index.min.js',
        format: 'iife',
        name: 'particulas'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        terser()
    ]
},
    {
        input: './src/main.js',
        output: {
            file: './build/index.es.js',
            format: 'es'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve(),
            commonjs()
        ]
    }
]