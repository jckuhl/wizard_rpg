const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/script/ts/wizard.ts',
        app: './src/script/js/app.js'
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/script')
    }
};