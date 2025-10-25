const path = require('path');

module.exports = {
  entry: [
    './js/swiper.js',
    './js/visual-swiper.js',
    './js/popup-swiper.js',
    './js/banner-swiper.js',
    './js/gnb-select.js',
    './js/lnb-hover.js',
    './js/drawer.js',
    './js/drawer-nav.js',
    './js/news-render.js',
    './js/news-tab.js',
    './js/scroll-top.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { ie: '11' },
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: 'production',
  target: ['web', 'es5'],
};
