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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
