/*const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
		                        plugins: [
		                            autoprefixer({
		                                overrideBrowserslist:['ie >= 7', 'last 10 version']
		                            })
		                        ],
		                        sourceMap: true
		                    }
						},
						'sass-loader'
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jpg$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};
*/

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: ['./src/js/game.js', './src/sass/style.sass'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
	          plugins: [
	            autoprefixer({
	              overrideBrowserslist:['ie >= 7', 'last 10 version']
	            })
	          ],
	          sourceMap: true
	        }
		  },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
          	loader: 'file-loader',
          	options: {
          	  name: '[name].[ext]',
          	  outputPath: 'images',
              publicPath: '../images'
          	}
          }
        ]
      }
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
};