const path = require('path')

module.exports = {
  entry:'./src/add.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index.js',
  },
  module:{
    rules:[
      {
        // 1.0 用正则匹配当前访问的文件的后缀名是  .css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
      },
    ]
  }
}