// app.js作为整个项目的入口文件，应该最先被建立

// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入cors中间件配置跨域问题
const cors = require('cors')
// joi：表单验证模块
const joi = require('joi')
// express-jwt：解析token字符串的模块
const expressJWT = require('express-jwt')
// config：用户自己定义的token加密秘钥
const config = require('./config')
// 导入路由模块
const userRouter = require('./router/user')
const articleRouter = require('./router/article')

app.use(cors())

// 除了/api/开头的接口不需要鉴权，其他的接口都需要鉴权
app.use(expressJWT({ secret: config.secretKey }).unless({ path: [/^\/user\//, /^\/api\//] }))

// 配置解析表单数据的中间件
// 通过express.json()这个中间件，解析表单中的JSON格式的数据
app.use(express.json())

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

// 路由模块要在最后才注册！
app.use('/user', userRouter)
app.use('/article', articleRouter)
app.get('/info/getinfo', (req, res) => {
    res.send({
        result_code: 0, result_msg: 'get user info succeed', userinfoid: req.user.id, userinfoname: req.user.account
    })
})

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

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(4000, function () {
    console.log('api server running at http://192.168.234.188:4000')
})