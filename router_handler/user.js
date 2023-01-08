/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 导入数据库连接对象
const db = require('../database/index')
// 导入bcryptjs(加密密码)
const bcryptjs = require('bcryptjs')
// 导入生成JWT的包(生成token)
const jwt = require('jsonwebtoken')
// 导入生成JWT的配置文件(secret秘钥，用户自行生成)
const config = require('../config')

// 注册的处理函数
exports.regUser = (req, res) => {
  // 1.接收表单数据(此处的userinfo含有三个属性:name,account,password)
  const userinfo = req.body

  // 2.定义sql语句，查找该用户名是否被占用
  const sql_CheckAccount = `select * from users where account=?`
  db.query(sql_CheckAccount, userinfo.account, (err, results) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: err.message
      })
    }
    // 用户名已经被占用
    if (results.length > 0) {
      return res.send({
        result_code: 1,
        result_msg: "this account has been occupied"
      })
    } else {
      // 3.若当前用户名可用，调用bcryptjs加密密码
      userinfo.password = bcryptjs.hashSync(userinfo.password, 10)
      // 4.定义插入用户的SQL语句
      const sql_InsertUser = 'insert into users set ?'
      db.query(sql_InsertUser, userinfo, (err, results) => {
        if (err) {
          return res.send({
            result_code: 1,
            result_msg: "register failed:" + err.message
          })
        }
        if (results.affectedRows !== 1) {
          return res.send({
            result_code: 1,
            result_msg: "register failed,please try again later!" + results.affectedRows
          })
        }
        res.send({
          result_code: 0,
          result_msg: "register succeed"
        })
      })
    }
  })
}

// 登录的处理函数
exports.login = (req, res) => {
  // 获取登录时提交的数据
  const userinfo = req.query
  // 在数据库中查询用户所提交的账号
  const sql_Login = 'select * from users where account=?'
  db.query(sql_Login, userinfo.account, (err, results) => {
    if (err) return res.send({
      result_code: 1,
      result_msg: err
    })
    if (results.length !== 1) return res.send({
      result_code: 1,
      result_msg: 'login failed',
      result_length: results.length
    })
    const compareResult = bcryptjs.compareSync(userinfo.password, results[0].password)
    if (!compareResult) {
      return res.send({
        result_code: 1,
        result_msg: '密码错误！请重新输入'
      })
    } else {
      // 如果输入正确，则生成 JWT token 字符串返回给客户端
      // 先剔除除了id和account以外的任何值
      const user = { ...results[0], password: '', name: '', major: '', university: '', headphoto: '', backgroundphoto: '', signature: '', introduce: '' }
      const token = jwt.sign(user, config.secretKey, { expiresIn: '24h' })
      const sql_GetKeywords = 'select keywords_name,keywords_count from keywords where user_id=?'
      db.query(sql_GetKeywords, user.id, (err, keyword_results) => {
        if (err) {
          return res.send({
            result_code: 1,
            result_msg: "get keywords failed:" + err.message
          })
        } else {
          const sql_GetArticleLabels = 'select label_name as label from article_labels'
          db.query(sql_GetArticleLabels, (err, label_results) => {
            if (err) {
              return res.send({
                result_code: 1,
                result_msg: "get article_labels failed:" + err.message
              })
            } else {
              label_results.forEach((item) => {
                item.value = item.label
              })
              res.send({
                result_code: 0,
                result_msg: "login succeed",
                token: 'Bearer ' + token,
                keywords_list: keyword_results,
                user_info: { ...results[0], password: null },
                article_labels: label_results
              })
            }
          })
        }
      })
    }
  })
}