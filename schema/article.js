const joi = require('joi')

const article_title = joi.string().min(1).max(20).required()
const article_details = joi.string().min(1).required()
const article_status = joi.number().min(0).max(1).required()
const article_major = joi.string().min(1).max(45).required()
const article_labels = joi.string().min(1).max(45).required()
const article_introduce = joi.string().min(1).max(100).required()
const author_id = joi.string().min(1).max(45).required()
const article_link = joi.string().min(1).max(200)

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对req.body中的数据进行验证
  body: {
    article_title,
    article_details,
    article_status,
    article_major,
    article_labels,
    article_introduce,
    author_id,
    article_link,
  }
}