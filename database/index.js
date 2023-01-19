// 导入mysql模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: "116.62.174.166",
  user: "root",
  password: "20021209xiang",
  database: "knowledge sharing website"
})

// 向外共享db数据库连接对象
module.exports = db