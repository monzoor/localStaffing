const { mix } = require('laravel-mix');


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



mix.sass('components/scss/main.scss', 'dist/css')
   .scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/materialize-css/dist/js/materialize.min.js',
    'components/js/common.js'
  ], 'dist/js/main.js')

   .copy('components/fonts', 'dist/fonts')
   .copy('components/images', 'dist/images')
