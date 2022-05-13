const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: "index.html",
      })    
  ],
  optimization: {
    minimize: true,
  },
  module: {
      rules: [
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/inline'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: { minimize: true },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //Create style nodes from JS strings
                    "style-loader",
                    //Translates CSS into CommonJS
                    "css-loader",
                    //Compiles Sass to CSS
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: ["src/styles/vars.scss", "src/styles/mixins.scss"],
                        },
                    },
                ],
            },
        ]
  },
  ...devServer(develop),
});