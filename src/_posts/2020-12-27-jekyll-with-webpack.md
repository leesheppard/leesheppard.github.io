---
title: Jekyll with Webpack
date: 2020-12-27 10:48:54 +10:00
categories:
- tips
layout: post
---

Jekyll-assets has not been updated to work with Jekyll 4.0 for some time since its release. This made me want to explore some of the more recent modern packaging that is in use. And I wanted to allow some flexibility to work with Javascript. 

### Dependencies
* Jekyll
* Node
* Ruby
* NPM


Install Webpack and some useful plugins:

	$ npm install @babel/core @babel/preset-env babel-loader css-loader cssnano node-sass postcss-loader@~3.0.0 sass-loader style-loader terser-webpack-plugin webpack-cli webpack --save-dev
	
Couple of things to note in that list, PostCSS has an issue that required me to revert to the previous version to remove a [build error](https://github.com/JeffreyWay/laravel-mix/issues/2471). Also [UglifyJS-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) is now archived and no longer maintained so I replaced with [Terser](https://github.com/webpack-contrib/terser-webpack-plugin).

Create the new folders and files required for Webpack

	$ mkdir -p _webpack/{js,scss}
	$ touch _webpack/main.{js,scss}
	$ touch webpack.config.js
	
Webpack configuration setup (webpack.config.js)

```
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

// https://webpack.js.org/configuration/
module.exports = {
  entry: {
    main: path.join(__dirname, '_webpack', 'main'),
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // https://webpack.js.org/loaders/postcss-loader/
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('cssnano')(), // https://cssnano.co/
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
```

New files in the `_webpack` folder:

* `js` JS modules to be imported in the main.js file.
* `main.js` main JS file, the webpack entrypoint.
* `main.scss` main SCSS file. be sure to import this file in main.js file.
* `scss` SCSS partials to be imported in the main.scss file.

### _webpack/main.js

The Webpack entrypoint.
Import all necessary JS modules in this file.
Initialize JS code here as needed.
__Note: The ./main.scss file needs to be imported here.__

Example:

```
import Turbolinks from 'turbolinks';
import './main.scss';

Turbolinks.start();
```

### _webpack/main.scss

This is the top-level SCSS file.
It is imported in the `./main.js` file.

Here is an example:

```
@import 'sass/base';
@import 'sass/layout';
@import 'sass/settings';
@import 'sass/syntax-highlighting';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

The end.