// 这个文件是 vue-cli 创建出来的项目配置文件
// vue.config.js 这个配置文件中，可以对整个项目的打包、构建进行全局性的配置

// webpack 在进行打包的时候，底层用到了 node.js
// 因此，在 vue.config.js 配置文件中，可以导入并使用 node.js 中的核心模块
/* jshint esversion: 6 */ // 启用es6语法

const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量 每次定义都需要重启服务器，不推荐
            // 'nav-bar-background-color': '#007bff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // 从盘符开始的路径，叫做绝对路径
            hack: `true; @import "${themePath}"`
          }
        }
      }
    }
  },
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
  publicPath: './'
})
