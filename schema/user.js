// 进行用户的表单验证
// 导入第三方表单验证模块joi
const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 定义account的验证规则
const account = joi.string().alphanum().min(1).max(15).required()
// 定义password的验证规则
const password = joi.string().min(6).max(20).required()

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对req.body中的数据进行验证
  body: {
    account,
    password
  }
}