"use strict";(self["webpackChunkxueyigou"]=self["webpackChunkxueyigou"]||[]).push([[340],{5340:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"InfoMain-wrap",attrs:{name:"InfoMain"}},[a("el-row",[a("div",{staticStyle:{display:"flex",margin:"20px 0 20px 100px"}},[a("div",{staticClass:"titleline"}),a("div",{staticStyle:{margin:"10px 0 0 10px"}},[a("font",{staticClass:"title"},[e._v(" 个人资料信息设置")])],1)])]),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("div",{staticClass:"forms"},[a("el-row",{staticStyle:{width:"620px"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("用户名称：")]),a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{staticClass:"public-uncheck",staticStyle:{width:"400px",height:"50px"},attrs:{placeholder:"请设置您的名称",clearable:""},model:{value:e.ruleForm.name,callback:function(a){e.$set(e.ruleForm,"name",a)},expression:"ruleForm.name"}})],1)],1),a("el-row",{staticStyle:{width:"620px",margin:"-10px 0 0 0"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("用户所学专业：")]),a("el-cascader",{staticStyle:{width:"400px",height:"50px"},attrs:{placeholder:"请选择您目前所在的/擅长的专业类别",options:e.options,props:{expandTrigger:"hover"},value:e.value},model:{value:e.ruleForm.major,callback:function(a){e.$set(e.ruleForm,"major",a)},expression:"ruleForm.major"}})],1),a("el-row",{staticStyle:{width:"620px",margin:"30px 0 0 0"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("所在院校：")]),a("el-form-item",{attrs:{prop:"university"}},[a("el-input",{staticClass:"public-uncheck",staticStyle:{width:"400px"},attrs:{placeholder:"请设置您所在的学校",clearable:""},model:{value:e.ruleForm.university,callback:function(a){e.$set(e.ruleForm,"university",a)},expression:"ruleForm.university"}})],1)],1),a("el-row",{staticStyle:{width:"620px"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("用户签名：")]),a("el-form-item",{attrs:{prop:"sign"}},[a("el-input",{staticClass:"public-uncheck",staticStyle:{width:"400px"},attrs:{placeholder:"请设置您的个性签名",clearable:""},model:{value:e.ruleForm.signature,callback:function(a){e.$set(e.ruleForm,"signature",a)},expression:"ruleForm.signature"}})],1)],1),a("el-row",{staticStyle:{width:"620px"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("用户个人简介：")]),a("el-form-item",{attrs:{prop:"introduce"}},[a("el-input",{staticClass:"public-uncheck",staticStyle:{width:"400px"},attrs:{placeholder:"请设置您的个人简介(有关于自身能力的介绍)",clearable:""},model:{value:e.ruleForm.introduce,callback:function(a){e.$set(e.ruleForm,"introduce",a)},expression:"ruleForm.introduce"}})],1)],1),a("el-row",{staticStyle:{width:"422px"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("个人头像：")]),a("el-upload",{staticClass:"head-avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","http-request":e.uploadHeadImage,"show-file-list":!1,"before-upload":e.headbeforeAvatarUpload,"on-change":e.handlehead}},[e.croppedHeadimageUrl?a("img",{staticClass:"head-avatar",attrs:{src:e.croppedHeadimageUrl}}):a("i",{staticClass:"el-icon-plus head-avatar-uploader-icon"})])],1),a("el-dialog",{attrs:{title:"图片切割",visible:e.header_dialogFormVisible},on:{"update:visible":function(a){e.header_dialogFormVisible=a}}},[a("div",[a("vue-cropper",{ref:"headerCropper",staticClass:"cropper",attrs:{img:e.headimageUrl,centerBox:"",outputSize:e.cropOptions.header.outputSize,info:e.cropOptions.header.info,canScale:e.cropOptions.header.canScale,autoCrop:e.cropOptions.header.autoCrop,autoCropWidth:e.cropOptions.header.autoCropWidth,autoCropHeight:e.cropOptions.header.autoCropHeight,fixed:e.cropOptions.header.fixed,fixedNumber:e.cropOptions.header.fixedNumber,full:e.cropOptions.header.full,original:e.cropOptions.header.original,enlarge:e.cropOptions.header.enlarge,mode:e.cropOptions.header.mode}})],1),a("el-row",{staticStyle:{margin:"20px 29px 0 0"},attrs:{type:"flex",justify:"end"}},[a("el-button",{on:{click:function(a){e.header_dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",block:"",loading:e.loading},on:{click:function(a){e.header_dialogFormVisible=!1,e.getCropData("header")}}},[e._v("确 定 ")])],1)],1),a("el-row",{staticStyle:{width:"897px",margin:"40px 0 0 0"},attrs:{type:"flex",justify:"space-between"}},[a("font",[e._v("背景图片：")]),a("el-upload",{staticClass:"back-avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","http-request":e.uploadBackImage,"show-file-list":!1,"before-upload":e.backbeforeAvatarUpload,"on-change":e.handleback}},[e.croppedBackimageUrl?a("img",{staticClass:"back-avatar",attrs:{src:e.croppedBackimageUrl}}):a("i",{staticClass:"el-icon-plus back-avatar-uploader-icon"})])],1),a("el-dialog",{attrs:{title:"图片切割",visible:e.background_dialogFormVisible},on:{"update:visible":function(a){e.background_dialogFormVisible=a}}},[a("div",[a("vue-cropper",{ref:"backgroundCropper",staticClass:"cropper",attrs:{img:e.backimageUrl,centerBox:"",outputSize:e.cropOptions.background.outputSize,info:e.cropOptions.background.info,canScale:e.cropOptions.background.canScale,autoCrop:e.cropOptions.background.autoCrop,autoCropWidth:e.cropOptions.background.autoCropWidth,autoCropHeight:e.cropOptions.background.autoCropHeight,full:e.cropOptions.background.full,fixed:e.cropOptions.background.fixed,fixedNumber:e.cropOptions.background.fixedNumber,enlarge:e.cropOptions.background.enlarge,mode:e.cropOptions.background.mode}})],1),a("el-row",{staticStyle:{margin:"20px 29px 0 0"},attrs:{type:"flex",justify:"end"}},[a("el-button",{on:{click:function(a){e.background_dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{ref:"cropper",attrs:{type:"primary",block:""},on:{click:function(a){e.background_dialogFormVisible=!1,e.getCropData("background")}}},[e._v("确 定 ")])],1)],1),a("el-row",{staticStyle:{margin:"30px 60px 0 0"},attrs:{type:"flex",justify:"end"}},[a("div",{staticClass:"button",on:{click:function(a){return e.submit()}}},[a("font",[e._v("确认提交")])],1)])],1)])],1)},l=[],r=(t(82801),t(32900)),i=t(72385),s=t(23825),n={name:"InfoMain",data(){return{loading:!1,originUserInfo:{...JSON.parse(localStorage.getItem("user_info"))},headimageUrl:"",croppedHeadimageUrl:"",headimageFile:{},uploadHeadImageTime:0,backimageUrl:"",croppedBackimageUrl:"",backimageFile:{},uploadBackImageTime:0,value:[],options:[{value:"文学",label:"文学",children:[{value:"中国语言文学类",label:"中国语言文学类"},{value:"新闻传播学类",label:"新闻传播学类"},{value:"外国语言文学类",label:"外国语言文学类"},{value:"其他类别",label:"其他类别"}]},{value:"艺术学",label:"艺术学",children:[{value:"音乐",label:"音乐"},{value:"舞蹈",label:"舞蹈"},{value:"影视学类",label:"影视学类"},{value:"戏剧学类",label:"戏剧学类"},{value:"美术学类",label:"美术学类"},{value:"设计学类",label:"设计学类"},{value:"其他类别",label:"其他类别"}]},{value:"理学",label:"理学",children:[{value:"信息与计算科学",label:"信息与计算科学"},{value:"数学与应用数学",label:"数学与应用数学"},{value:"应用化学",label:"应用化学"},{value:"生物技术",label:"生物技术"},{value:"生物科学",label:"生物科学"},{value:"应用物理学",label:"应用物理学"},{value:"应用心理学",label:"应用心理学"},{value:"统计学",label:"统计学"},{value:"化学",label:"化学"},{value:"物理学",label:"物理学"},{value:"其他类别",label:"其他类别"}]},{value:"工学",label:"工学",children:[{value:"土木工程",label:"土木工程"},{value:"机械类专业",label:"机械类专业"},{value:"电气工程及其智能化",label:"电气工程及其智能化"},{value:"计算机科学与技术",label:"计算机科学与技术"},{value:"车辆工程",label:"车辆工程"},{value:"软件工程",label:"软件工程"},{value:"交通运输工程",label:"交通运输工程"},{value:"自动化",label:"自动化"},{value:"其他类别",label:"其他类别"}]},{value:"农学",label:"农学",children:[{value:"园艺",label:"园艺"},{value:"种子科学与工程",label:"种子科学与工程"},{value:"设施农业科学与工程",label:"设施农业科学与工程"},{value:"农业资源与环境",label:"农业资源与环境"},{value:"动物科学",label:"动物科学"},{value:"林学",label:"林学"},{value:"水产养殖学",label:"水产养殖学"},{value:"草业学科",label:"草业学科"},{value:"茶学",label:"茶学"},{value:"烟草",label:"烟草"},{value:"农艺教育",label:"农艺教育"},{value:"园艺教育",label:"园艺教育"},{value:"其他类别",label:"其他类别"}]},{value:"其他学科",label:"其他学科"}],ruleForm:{...JSON.parse(localStorage.getItem("user_info"))},rules:{name:[{required:!0,message:"用户名是必填项！",trigger:"blur"}],major:[{required:!0,message:"专业设置是必填项！",trigger:"blur"}],university:[{required:!0,message:"学校设置是必填项！",trigger:"blur"}],introduce:[{required:!0,message:"个人简介是必填项！",trigger:"blur"}]},cropOptions:{header:{outputSize:1,info:!0,canScale:!0,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixed:!0,fixedNumber:[1,1],original:!1,enlarge:1,mode:"650px 350px"},background:{outputSize:1,info:!0,canScale:!0,autoCrop:!0,autoCropWidth:675,autoCropHeight:142.5,fixed:!0,fixedNumber:[4.7368,1],full:!1,enlarge:1,mode:"675px 400px"}},header_dialogFormVisible:!1,background_dialogFormVisible:!1}},methods:{dataURLtoFile(e,a){const t=e.split(","),o=t[0].match(/:(.*?);/)[1],l=atob(t[1]);let r=l.length;const i=new Uint8Array(r);while(r--)i[r]=l.charCodeAt(r);return new File([i],a,{type:o})},uploadHeadImage(){},headbeforeAvatarUpload(e){const a="image/jpeg"===e.type,t=e.size/1024/1024<2;a||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&t&&(this.uploadHeadImageTime>0&&(0,i.L)({imgURL:this.ruleForm.headphoto}).then((e=>{console.log(e.data)})),this.headimageFile=e,console.log("头像文件！",this.headimageFile),this.uploadHeadImageTime++)},handlehead(e){this.header_dialogFormVisible=!0,this.headimageUrl=URL.createObjectURL(e.raw)},uploadBackImage(){},backbeforeAvatarUpload(e){const a="image/jpeg"===e.type,t=e.size/1024/1024<2;a||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&t&&(this.uploadBackImageTime>0&&(0,i.L)({imgURL:this.ruleForm.backgroundphoto}).then((e=>{console.log(e.data)})),this.backimageFile=e,console.log("背景文件！",this.backimageFile),this.uploadBackImageTime++)},handleback(e){this.background_dialogFormVisible=!0,this.backimageUrl=URL.createObjectURL(e.raw)},getCropData(e){"header"==e&&this.$refs.headerCropper.getCropData((e=>{(0,i.Z)({imgData:e}).then((e=>{console.log(e.data),this.ruleForm.headphoto=e.data.imgURL,this.croppedHeadimageUrl=e.data.imgURL}))})),"background"==e&&this.$refs.backgroundCropper.getCropData((e=>{(0,i.Z)({imgData:e}).then((e=>{console.log(e.data),this.ruleForm.backgroundphoto=e.data.imgURL,this.croppedBackimageUrl=e.data.imgURL}))}))},submit(){localStorage.setItem("user_info",JSON.stringify(this.ruleForm)),this.uploadHeadImageTime>0&&this.ruleForm.headphoto!=this.originUserInfo.headphoto&&(0,i.L)({imgURL:this.originUserInfo.headphoto}).then((e=>{console.log(e.data)})),this.uploadBackImageTime>0&&this.ruleForm.backgroundphoto!=this.originUserInfo.backgroundphoto&&(0,i.L)({imgURL:this.originUserInfo.backgroundphoto}).then((e=>{console.log(e.data)})),(0,r.Po)(this.ruleForm).then((e=>{console.log(e.data),this.$notify({title:"更新个人资料成功！",message:"2s后刷新页面...",type:"success"}),setTimeout((()=>{window.location.reload()}),2e3)})),this.headimageUrl="",this.headimageFile={},this.uploadHeadImageTime=0,this.backimageUrl="",this.backimageFile={},this.uploadBackImageTime=0}},beforeRouteLeave(e,a,t){JSON.stringify(this.ruleForm)==JSON.stringify(this.originUserInfo)?t(!0):this.$confirm("检测到未保存的内容，离开此页面后修改内容将不会被保存","确认离开此页面？",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then((()=>{this.uploadHeadImageTime>0&&this.ruleForm.headphoto!=JSON.parse(localStorage.getItem("user_info")).headphoto&&(0,i.L)({imgURL:this.ruleForm.headphoto}).then((e=>{console.log(e.data)})),this.uploadBackImageTime>0&&this.ruleForm.backgroundphoto!=JSON.parse(localStorage.getItem("user_info")).backgroundphoto&&(0,i.L)({imgURL:this.ruleForm.backgroundphoto}).then((e=>{console.log(e.data)})),t(!0)})).catch((()=>{t(!1)}))},components:{VueCropper:s.VueCropper}},u=n,c=t(1001),p=(0,c.Z)(u,o,l,!1,null,"d4f58ad0",null),d=p.exports},72385:function(e,a,t){t.d(a,{L:function(){return r},Z:function(){return l}});var o=t(90023);function l(e){return(0,o.Z)({url:"/uploadimg",method:"post",data:e})}function r(e){return(0,o.Z)({url:"/deleteimg",method:"post",data:e,async:!1})}},32900:function(e,a,t){t.d(a,{E2:function(){return i},MO:function(){return r},Po:function(){return s},WW:function(){return l}});var o=t(90023);function l(e){return(0,o.Z)({url:"/user/login",method:"get",params:e})}function r(e){return(0,o.Z)({url:"/user/register",method:"post",data:e})}function i(e){return(0,o.Z)({url:"/user/userinfo",method:"get",params:e})}function s(e){return(0,o.Z)({url:"/user/edituserinfo",method:"post",data:e})}}}]);
//# sourceMappingURL=340.14cae277.js.map