const mix = require('laravel-mix');
require('vuetifyjs-mix-extension')

mix.webpackConfig({
    optimization: {
        sideEffects: false
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@' : __dirname + '/resources/js'
        },
    },
})
    // .webpackConfig({ output: { filename: '[name].js', chunkFilename: 'js/[name].app.js', publicPath: '/' } });

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader');
mix.sass('resources/sass/app.scss', 'public/css');
