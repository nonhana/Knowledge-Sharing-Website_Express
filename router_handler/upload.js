const fs_promise = require('fs').promises
const fs = require('fs')
const path = require('path')

// 上传图片的处理函数
exports.uploadImg = (req, res) => {
  let imgData = req.body.imgData;
  //过滤data:URL
  let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
  let dataBuffer = Buffer.from(base64Data, 'base64');
  const imageId = base64Data.slice(base64Data.length - 40, base64Data.length - 20).replace(/\//g, "_")
  const fileURL = `./static/${imageId}.jpg`
  fs.writeFile(fileURL, dataBuffer, function (err) {
    if (err) {
      res.send({
        result_code: 1,
        result_msg: "save picture failed：" + err.message
      });
    } else {
      res.send({
        result_code: 0,
        result_msg: "save picture succeed",
        imgURL: `http://116.62.174.166:4000/images/${imageId}.jpg`,
        base64Data: imageId
      });
    }
  });
}

// 删除本地图片文件的处理函数
exports.deleteImg = (req, res) => {
  // 根据imgURL拼接出本地图片存储的路径
  const imgURL = path.join(__dirname, `../static/${req.body.imgURL.slice(req.body.imgURL.length - 24, req.body.imgURL.length)}`)
  async function rmdirAsync(imgURL) {
    try {
      let stat = await fs_promise.stat(imgURL)
      if (stat.isFile()) {
        await fs_promise.unlink(imgURL)
      } else {
        return res.send({
          result_code: 1,
          result_msg: "delete image failed：file isn't image!"
        })
      }
    } catch (err) {
      return res.send({
        result_code: 1,
        result_msg: "delete image failed：" + err
      })
    }
  }
  // 调用删除图片的异步转同步函数
  require('fs').existsSync(imgURL) && rmdirAsync(imgURL).then(() => {
    return res.send({
      result_code: 0,
      result_msg: "delete image succeed"
    })
  })
}