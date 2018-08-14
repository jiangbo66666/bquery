const path = require('path')

module.exports = {
  entry:'./src/add.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
}