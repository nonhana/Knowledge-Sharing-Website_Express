const express = require('express')
const router = express.Router()
const articleHandler = require('../router_handler/article')
const expressJoi = require('@escook/express-joi')
const { reg_article_schema } = require('../schema/article')

// 编写有关于articles的接口
router.get('/articlelist', articleHandler.getAricleList)
router.post('/postarticle', expressJoi(reg_article_schema), articleHandler.postArticle)

// 将路由对象共享出去
module.exports = router