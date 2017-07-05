const webpack =  require('webpack')

const config = {
  context: __dirname + '/src',
  entry: ['./index.js', './style.scss'],
  output: {
    path: __dirname + '/docs/assets',
    filename: 'bundle.js',
    publicPath: "assets/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      { test: /\.(sass|scss|css)$/, use: ['style-loader','css-loader', 'sass-loader'] },
      { test: /\.(jpg|jpeg|gif|png)$/, loader:'url-loader?limit=1024&name=images/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=65000&name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
   new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jQuery",
     'window.jQuery': "jquery",
     "Tether": 'tether'
   })
  ],
  devServer: {
    contentBase: __dirname + '/src',
    open: true,
    port: 3000,
    host: '0.0.0.0'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  devtool: "eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config
