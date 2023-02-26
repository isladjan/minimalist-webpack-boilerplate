# 📦 Minimalist Webpack 5 Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Minimalist webpack 5 setup using PostCSS

## Features

    - Separate webpack configurations for each environment (common, dev, prod and analyzer)

    - This Setup is only configured to copy assets files (images, fonts...) to the dist folder. Literally the entire contents of the Static folder are copied. The path for External resources (from the Static folder) that you specify in html, css and js must be specified as relative to the dist folder

    # Javascript
        --Production mode: js minify, tree shaking, remove comments
        --Development mode: source map, Live Server
        --Both: default Bundle splitting (all npm scripts in one vendor.js file, all my .js files in one bundle, asynchronous modules each in its own bundle)

    # CSS
        css-loader                      //allows Wabpack handling .css files
        css-minimizer-webpack-plugin    //minify css
        mini-css-extract-plugin         //final css bundled file inserts into <head>
        postcss-loader  & postcss       //enable PostCSS
        postcss-preset-env              //autoprefixer &  transform new css properties that are not supported in some browsers (specified in BroswerList) into fallbacks

        --all css files will be bundled into one separate file and added to <head>
        --external resources from the .css file Webpack will not resolve (you specify the path as from the dist folder)
        --production phase: css code will be minified & transform new css properties that are not supported in some browsers (specified in BroswerList) into fallbacks
        --normalize is not set


    NOTE: Webpack processes only those files that we list in index.js (entry point), Webpack will not touch other files that you add manually to template.html.



## Installation
```bash
npm i
```

### Development
```bash
npm run dev
```

### Development server
```bash
npm run live
```

### Production build
```bash
npm run build
```

### Production build + analyzer
```bash
npm run build:analyzer
```

## Folder structure
```
src
└── styles
│    └── main.css
└── scripts
│    └── main.js
├── index.js
public
├── assets
└── template.html
```


## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Visualize size of webpack output files
- [`webpack-bundle-analyzer`](https://github.com/unjs/webpackbar) - Display elegant progress bar while building

### Loaders

- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS


### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets

### browserslist
- 'last 2 versions'
- '> 0.5%'
- 'not dead'
- 'not ie <= 11'
- 'not op_mini all'


### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
  - - [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack