const path               = require('path');
const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const ExtendedDefine     = require('extended-define-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

/* ENVIRONMENT CHECK
 * ************************************************ */

const NODE_ENV = process.env.NODE_ENV || 'development';

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION  = NODE_ENV === 'production';
const ENV_TEST        = NODE_ENV === 'test';

const API_HOST   = process.env.API_HOST || 'localhost';
const API_PORT   = process.env.API_PORT || 3000;
const API_PREFIX = ENV_PRODUCTION ? '' : 'api/';

const CLIENT_HOST = process.env.CLIENT_HOST || 'localhost';
const CLIENT_PORT = process.env.CLIENT_PORT || 8080;

/* DIRS & URLS
 * ************************************************ */

const ROOT_DIR = __dirname;

const SRC_DIR  = path.join(ROOT_DIR, `src`);
const DIST_DIR = path.join(ROOT_DIR, `dist`);

const CLIENT_URL  = `http://${CLIENT_HOST}:${CLIENT_PORT}`;
const PUBLIC_PATH = '/';

/* CONFIG
 * ************************************************ */

const config = module.exports = {};


/* COMMON CFG
 * ************************************************ */

config.module = {
  preLoaders: [],
  loaders: [
    {test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel']},
    {test: /\.html$/, loader: 'raw'},
    {test: /\.json$/, loaders: ['json-loader'], include: path.join(__dirname, 'data')},
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css-loader!less-loader'),
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader'),
    }, {
      test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff&name=./assets/fonts/[hash].[ext]',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream&name=./assets/fonts/[hash].[ext]',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=./assets/fonts/[hash].[ext]',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml&name=./assets/fonts/[hash].[ext]',
    },
  ]
};

config.plugins = [
  new HotModuleReplacementPlugin(),
  new ExtractTextPlugin('styles.css'),
  new CleanWebpackPlugin(['./dist'], {root: ROOT_DIR}),
  new ExtendedDefine({CONFIG: {API_PREFIX}}),
];

/* DEVELOPMENT OR PROD CFG
 * ************************************************ */

if (!ENV_TEST) {

  config.entry = {
    app: [path.resolve(SRC_DIR, 'index.js')]
  };

  config.output = {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: PUBLIC_PATH
  };

  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      name: 'AlineTestApp',
      chunks: ['app'],
      inject: 'body',
      template: path.join(SRC_DIR, `index.html`)
    }));
}


/* DEVELOPMENT CFG
 * ************************************************ */

if (ENV_DEVELOPMENT) {

  config.devtool = 'source-map';
  config.entry['app'].unshift(`webpack/hot/only-dev-server`);
  config.entry['app'].unshift(`webpack-dev-server/client?${CLIENT_URL}`);
  config.devServer = {
    proxy: {
      [`/${API_PREFIX}`]: {
        target: `http://${API_HOST}:${API_PORT}`,
        secure: false,
        pathRewrite: {[`^/${API_PREFIX}`]: ''}
      }
    },
    contentBase: SRC_DIR,
    inline: true,
    historyApiFallback: true,
    host: CLIENT_HOST,
    port: CLIENT_PORT,
    publicPath: config.output.publicPath,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: true
    }
  };

}


/* TEST CFG
 * ************************************************ */
if (ENV_TEST) {
  config.output = {};
  config.entry  = {};

  config.devtool = 'inline-source-map';
  config.module.preLoaders.push({
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /karma\.entry\.js$/,
      /\.test\.js$/,
      /\.spec\.js$/,
      /\.mock\.js$/
    ],
    loader: 'isparta'
  });
}
