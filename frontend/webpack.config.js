const webpack = require('webpack')
var path      = require('path')
var Promise   = require('es6-promise').Promise

const autoprefixer = require('autoprefixer')
const precss       = require('precss')

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, 'src'),
  resolve: {
    root:  [
      path.resolve('./node_modules'),
      '/npm/node_modules',
      path.resolve('./src')
    ],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  resolveLoader: {
    root: [path.resolve('./node_modules'), '/npm/node_modules']
  },
  entry: {
    dashboard: ['babel-polyfill', 'whatwg-fetch', './dashboard/entry.js'],
    exercise: ['babel-polyfill', 'whatwg-fetch', './exercise/entry.js']
  },
  output: {
    path: __dirname + './../app/assets/javascripts/bundles',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-object-rest-spread']
        }
      },
      { test: /\.css$/,
        loader: "style!css"
      },
      { test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.postcss$/,
        loaders: ['style', 'css', 'postcss?parser=sugarss']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file?name=../../../../public/img/[name]_[hash].[ext]'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-object-rest-spread']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  postcss: function() {
    return [ autoprefixer({ browsers: ['IE 10', 'IE 11', 'last 4 versions'] }), precss ]
  }

}
