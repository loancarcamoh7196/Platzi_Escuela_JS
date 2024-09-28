const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // Comprimir
const TerserPlugin = require('terser-webpack-plugin'); //Minimizer
const { WebpackManifestPlugin } = require('webpack-manifest-plugin'); // Manifiesto
const ESLintPlugin = require('eslint-webpack-plugin'); // Webpack ESLint
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
    filename: isDev ? 'assets/app.js' : 'assets/app-[fullhash].js', // Hash archivo
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
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
    isDev ? () => { } : new ESLintPlugin(),
    isDev ? new Webpack.HotModuleReplacementPlugin() : () => { },
    isDev ? () => { } : new CompressionWebpackPlugin({
      test: /.js$|.css$/, filename: '[path][base].gz',
    }),
    isDev ? () => { } : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({ filename: isDev ? 'assets/app.css' : 'assets/app-[fullhash].css' }), // Hash archivo
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[contenthash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name);
          },
        },
      },
    },
  },
};
