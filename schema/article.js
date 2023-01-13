const joi = require('joi')

const article_title = joi.string().min(1).max(50).required()
const article_details = joi.string().required()
const article_status = joi.string().required()
const article_major = joi.array().min(1).max(45).required()
const article_labels = joi.array().min(1).max(45).required()
const article_introduce = joi.string().min(1).max(100).required()
const author_id = joi.number().min(1).required()
const article_uploaddate = joi.string().min(1).max(45).required()
const article_link = joi.string().allow('')
const article_md = joi.string().required()

// 注册和登录表单的验证规则对象
exports.reg_article_schema = {
  // 表示需要对req.body中的数据进行验证
  body: {
    article_title,
    article_details,
    article_status,
    article_major,
    article_labels,
    article_introduce,
    author_id,
    article_uploaddate,
    article_link,
    article_md
  }
}