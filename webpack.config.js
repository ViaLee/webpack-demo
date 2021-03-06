const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: __dirname + 'node_modules',
        include: __dirname + 'src',        
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
         test: /\.scss$/,
         use: [{
           loader: "style-loader"
          },{
           loader: "css-loader"
          },{
           loader: "sass-loader",
           options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
              }
          }]
       }
    ]
  }
};

