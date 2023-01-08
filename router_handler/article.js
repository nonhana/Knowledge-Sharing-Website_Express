// 获取数据库对象，为了之后sql操作数据库
const db = require('../database/index')

// 获取文章列表的处理函数
exports.getAricleList = (_, res) => {
  const sql_SelectAllArticles = 'select * from articles'
  db.query(sql_SelectAllArticles, (err, results1) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: "get artcle list fail:" + err.message
      })
    } else {
      let article_list = [];
      results1.forEach((item) => {
        const sql_SelectUserInfo = 'select name,major,university,headphoto,signature from users where id=?'
        db.query(sql_SelectUserInfo, item.author_id, (err, results2) => {
          if (err) {
            return res.send({
              result_code: 1,
              result_msg: "get artcle list fail:" + err.message
            })
          } else {
            let articleinfo = { ...item }
            articleinfo.author_name = results2[0].name
            articleinfo.author_major = results2[0].major
            articleinfo.author_university = results2[0].university
            articleinfo.author_headphoto = results2[0].headphoto
            articleinfo.author_signature = results2[0].signature
            article_list.push(articleinfo)
          }
        })
      })
      setTimeout(() => {
        res.send({
          result_code: 0,
          result_msg: "get artcle list succeed",
          article_list: article_list
        })
      }, 500)
    }
  })
}

// 提交文章的接口
exports.postArticle = (req, res) => {
  const article_body = req.body
  article_body.article_major = article_body.article_major.join(",")
  article_body.article_labels = article_body.article_labels.join(",")
  const sql_PostArticle = 'insert into articles set ?'
  db.query(sql_PostArticle, article_body, (err, results) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: "post article failed:" + err.message
      })
    } else if (results.affectedRows !== 1) {
      return res.send({
        result_code: 1,
        result_msg: "results.affectedRows !== 1:" + results.affectedRows
      })
    } else {
      return res.send({
        result_code: 0,
        result_msg: "post article succeed"
      })
    }
  })
}