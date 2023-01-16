<script>
export default {
  name: "PublicStyle",
};
</script>

<style>

/* 
全局css存储
添加全局属性时，要添加前缀：public-xxx 
使用时，在目标标签添加相应的class名即可  
*/

img {
  user-select: none;
  -webkit-user-drag: none;
}

/* 阻止选中和拖拽 */
.public-uncheck {
  user-select: none;
  -webkit-user-drag: none;
}

/* 图片hover放大效应 */
.public-bechosen {
  transition: all 0.5s;
}
.public-bechosen:hover {
  transform: scale(1.1, 1.1);
}
.beclicked {
  color: #ff5900 !important;
}
.behovered:hover {
  color: #ff5900 !important;
}
</style>