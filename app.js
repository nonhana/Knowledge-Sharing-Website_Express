// app.js作为整个项目的入口文件，应该最先被建立
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// body-parser：控制、解析传输的json以及urlencoded格式的数据
const bodyParser = require('body-parser')
// cors：配置跨域问题
const cors = require('cors')
// joi：表单验证模块
const joi = require('joi')
// express-jwt：解析token字符串的模块
const expressJWT = require('express-jwt')
// config：用户自己定义的token加密秘钥
const config = require('./config')
// path：配置文件路径的模块
const path = require('path')
// 导入路由模块
const userRouter = require('./router/user')
const articleRouter = require('./router/article')
const uploadRouter = require('./router/upload')

app.use(cors())

// .unless中用正则表达式来设置无需token的url
app.use(expressJWT({ secret: config.secretKey }).unless({ path: [/^\/user\//, /^\/api\//, /^\/images\//] }))

// 配置解析表单数据的中间件
// 通过bodyParser这个中间件，解析表单中的JSON格式以及urlencoded的数据
app.use(bodyParser.json({
    //最大一次性上传大小不超过10000kb
    limit: '10000kb'
}));
app.use(bodyParser.urlencoded({
    limit: '10000kb',
    extended: true,
    parameterLimit: 50000,//这个得加，不加没效果
}));

// 响应数据的中间件(重复写很麻烦，所以直接封装一个)
app.use((req, res, next) => {
    // 默认result_code为1，即为失败的情况
    res.cc = (err, result_code = 1) => {
        res.send({
            result_code, // 状态码
            result_msg: err instanceof Error ? err.message : err // 状态信息，如果是Error对象则返回err.message属性，不是则直接返回err
        })
    }
    next()
})
app.use('/images', express.static(path.join(__dirname, './static')))

// 注册路由模块
app.use('/user', userRouter) // 用户模块
app.use('/article', articleRouter) // 文章模块
app.use(uploadRouter) // 图片上传模块

// 全局错误中间件
app.use((err, req, res, next) => {
    // 默认result_code为1，即为失败的情况
    res.cc = (err, result_code = 1) => {
        res.send({
            result_code, // 状态码
            result_msg: err instanceof Error ? err.message : err // 状态信息，如果是Error对象则返回err.message属性，不是则直接返回err
        })
    }
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 身份验证失败
    if (err.name === 'UnauthorizedError') return res.cc(err)
    // 其他错误
    res.cc(err)
})

app.listen(4000, function () {
    console.log('api server running at http://116.62.174.166:4000')
})