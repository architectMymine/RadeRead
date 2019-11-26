# rade-book

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report

# git上传代码命令
 
 创建ssh上传地址      git remote add origin '地址'
 查看上传地址         git remote -v
 删除上传地址         git remote remove '名字'
 代码全部放置暂存区    git add .
 代码提交             git commit -m '注释'
 代码上传             git push origin master
 代码强制提交         git push -f origin master

# 项目遇到的问题
##  1.DetailContents组件不渲染问题 ，v-if判断条件存在问题。

##  2.input的focus问题，这是个逻辑问题还没处理

##  3.获取不了$router属性。 可能是组件没安装mpvuerouter

##  4.修复DetailContent组件不渲染问题，v-if的触发条件有问题，改正相反即可

##  5.写在DetailBottom的事件不会触发，据说是mpvue的一个bug，解决方法就是不使用组件，直接将组件的内容写到
##     detail页面中，这时候事件会正常触发(之后开发可以这么操作。)
##     贴上mpvue的源码：
##     
##     var attrs = data.attrs; // 获取事件 id
##     var on = data.on; // 事件实际存储位置，这里返回的是 undefined
##     if (attrs && on && attrs['eventid'] === eventid) {
##       eventTypes.forEach(function (et) {
##         var h = on[et];
##         if (typeof h === 'function') {
##           res.push(h);
##         } else if (Array.isArray(h)) {
##           res = res.concat(h);
##         }
##       });
##       return res
##     }


##  6.在调用wx的showToast以及showModal的时候，在success回调里面是无妨获取到this指向，
##  需要在外面定义如:
##  const vue = this
##  才能获取到。

## 7.在新建page的时候，注册页面的时候，如： pages/list/main
##  中的list其实指的就是文件夹的名字，并非你vue文件的名字。
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
