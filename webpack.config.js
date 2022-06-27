const path = require('path');
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//插件-自动清除dist目录内容
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  //mode模式解决一下警告
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 3000, // 端口号
    open: true    //默认打开
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
      filename: 'main.html', // 生成文件的名称
    }),
    new CleanWebpackPlugin(),
    // 删除的是ouput path 里配置的那个输出文件的文件夹
    // 默认情况下dist
  ],
};
