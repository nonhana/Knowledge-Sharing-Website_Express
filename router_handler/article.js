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
        const sql_SelectUserInfo = 'select name,major,university,headphoto,signature,article_num from users where id=?'
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
            articleinfo.article_num = results2[0].article_num
            articleinfo.article_major = articleinfo.article_major.split(",")
            articleinfo.article_labels = articleinfo.article_labels.split(",")
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

// 获取具体文章内容的处理函数
exports.getArticleMain = (req, res) => {
  const article_id = req.query.article_id
  const sql_GetArticleMain = 'select * from articles where article_id=?'
  db.query(sql_GetArticleMain, article_id, (err, results) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: "get article main failed:" + err.message
      })
    } else if (results.length != 1) {
      return res.send({
        result_code: 1,
        result_msg: "get article main failed:results.length != 1  " + results.length
      })
    } else {
      // 解构赋值，将要剔除的属性写在前面
      let { article_introduce, ...article_main } = results[0]
      article_main.article_major = article_main.article_major.split(",")
      article_main.article_labels = article_main.article_labels.split(",")
      return res.send({
        result_code: 1,
        result_msg: "get article main succeed",
        // article_main: Reflect.defineProperty(JSON.parse(results[0]), 'article_introduce')
        article_main: article_main
      })
    }
  })
}

// 提交文章的处理函数
exports.postArticle = (req, res) => {
  const article_body = req.body
  // 将major转换成以','分隔的字符串存储
  article_body.article_major = article_body.article_major.join(",")
  // 将labels转换成以','分隔的字符串存储
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

// 新增文章标签的处理函数
exports.addArticleLabel = (req, res) => {
  const newlabel = req.body
  const sql_AddNewLabel = 'insert into article_labels set ?'
  db.query(sql_AddNewLabel, newlabel, (err, results) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: "add new label failed:" + err.message
      })
    } else if (results.affectedRows !== 1) {
      return res.send({
        result_code: 1,
        result_msg: "add new label failed:results.affectedRows !== 1" + results.affectedRows
      })
    } else {
      return res.send({
        result_code: 0,
        result_msg: "add new label succeed"
      })
    }
  })
}

// 搜索时将搜索关键词提交给数据库后台并做记录
exports.submitSearchKeyword = (req, res) => {
  const keyword = req.body.keyword.toLowerCase()
  const user_id = req.body.user_id
  const sql_SearchUserKeyword = 'select * from keywords where user_id=?'
  db.query(sql_SearchUserKeyword, user_id, (err, user_results) => {
    if (err) {
      return res.send({
        result_code: 1,
        result_msg: "submit keyword failed：" + err.message
      })
    } else {
      let flag = 0
      user_results.forEach((item) => {
        if (item.keywords_name == keyword) {
          flag = 1
          const sql_UpdateKeywordCount = 'update keywords set keywords_count=keywords_count+1 where keywords_name=? and user_id=?'
          db.query(sql_UpdateKeywordCount, [keyword, user_id], (err, update_results) => {
            if (err) {
              return res.send({
                result_code: 1,
                result_msg: "submit keyword failed：" + err.message
              })
            } else if (update_results.affectedRows !== 1) {
              return res.send({
                result_code: 1,
                result_msg: "update_results.affectedRows = " + update_results.affectedRows
              })
            } else {
              return res.send({
                result_code: 0,
                result_msg: "submit keyword succeed"
              })
            }
          })
        }
      })
      if (flag == 0) {
        const insertNewKeyword = {
          keywords_name: keyword,
          keywords_count: 1,
          user_id: user_id
        }
        const sql_InsertNewKeyword = 'insert into keywords set ?'
        db.query(sql_InsertNewKeyword, insertNewKeyword, (err, insert_results) => {
          if (err) {
            return res.send({
              result_code: 1,
              result_msg: "submit keyword failed：" + err.message
            })
          } else if (insert_results.affectedRows !== 1) {
            return res.send({
              result_code: 1,
              result_msg: "insert_results.affectedRows=" + insert_results.affectedRows
            })
          } else {
            return res.send({
              result_code: 0,
              result_msg: "submit keyword succeed"
            })
          }
        })
      }
    }
  })
}