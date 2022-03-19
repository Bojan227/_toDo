const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'ToDo',
        template: "./src/index.html",
        filename: "./index.html"
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        
        {
          test: /\.html$/,
          use: [
            {
              
              loader: ["html-loader", 'file-loader'],
              options: {minimize: true}
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          
          use: [
            'file-loader'
          ]
        },
      ],
    },
    devServer: {
        static: './dist',
    }
  };