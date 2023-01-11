const express = require('express')
const router = express.Router()
const uploadHandler = require('../router_handler/upload')

router.post('/uploadimg', uploadHandler.uploadImg)
router.post('/deleteimg', uploadHandler.deleteImg)

// 将路由对象共享出去
module.exports = router