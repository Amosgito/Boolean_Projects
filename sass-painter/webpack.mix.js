const mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
       .sass('src/app.scss', 'dist')
       .copy('src/*.html', 'dist/')
       .copyDirectory('src/imgs', 'dist/imgs')
       ;