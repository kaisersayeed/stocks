const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
};

/**
 * Whether we are in development or production
 * @type {Boolean}
 */
const IS_DEV = process.env.NODE_ENV !== 'production';

const devPlugings = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './template.html',
  })
];

const prodPlugins = [
  new webpack.optimize.ModuleConcatenationPlugin(),
  new UglifyJsPlugin({
    sourceMap: false,
    comments: false,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './template.html',
  }),
  new ExtractTextPlugin('styles.css'),
];

const devEntry = ['react-hot-loader/patch', root.src];

const prodEntry = [root.src];

module.exports = {
  devServer: IS_DEV ? {
    proxy: {
      "/api": {
        "target": 'https://join.reckon.com',
        "pathRewrite": { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      }
    },
    historyApiFallback: true,
    noInfo: false,
    port: 9898,
  } : {},
  devtool: IS_DEV ? 'eval' : 'source-map',
  entry: {
    main: IS_DEV ? devEntry : prodEntry,
  },
  output: {
    path: IS_DEV ? root.dest : root.dest,
    filename: 'js/main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: IS_DEV,
            },
          },
        ],
        include: root.src,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        include: [/template\.html/],
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ],
  },
  plugins: IS_DEV ? devPlugings : prodPlugins,
};
