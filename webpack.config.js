const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // Comprimir
const TerserPlugin = require('terser-webpack-plugin'); //Minimizer
const { WebpackManifestPlugin } = require('webpack-manifest-plugin'); // Manifiesto
const { config } = require('./config'); // Archivo de Variables de Entorno

const isDev = (config.env === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
}

module.exports = {
  entry,
  mode: config.env,
  output: {
    path: path.resolve(__dirname, 'src/server/public'), // Ruta donde estar archivo de publicación
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js', // Hash archivo
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          //   'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/i,
        type: 'asset/resource',
        // options:{ name: 'assets/[hash].[ext]' },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    isDev ? new Webpack.HotModuleReplacementPlugin() : () => { },
    isDev ? () => { } : new CompressionWebpackPlugin({
      test: /.js$|.css$/, filename: '[path][base].gz',
    }),
    isDev ? () => { } : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({ filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css' }), // Hash archivo
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
