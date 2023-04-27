//导入path路径操作模块
const path = require('path')
//导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

//导入自动删除dist插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//创建html插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',//指定源文件的存放路径
    filename:'./index.html'//指定生成的文件存放路径
})

module.exports = {

    //mode 用来指定构建模式，可选值有 development[开发] 和 production[上线]
    // 开发的时候一定要用development,因为追求的是打包的速度,而不是体积
    mode: 'development',
    //在开发测试阶段，建议把devtool的值设置为eval-source-map
    // devtool: 'nosources-source-map',

    // entry:path.join(__dirname,'./src/index.js'), //打包入口文件的路径
    output:{
        path:path.resolve(__dirname,'./dist'), //输出文件的路径
        filename:'main.js'
    },

    //通过plugin节点，使htmlPlugin插件生效
    plugins:[htmlPlugin,new CleanWebpackPlugin()],

    devServer: {
        //默认打开浏览器
        open:true,
        //修改默认端口号
        port:80,
        //修改host地址
        host:'127.0.0.5',
        // 修改webpack-dev-server默认访问目录
        // static: {
        //     //directory: path.join(__dirname,'默认打开路径'),
        //     directory: path.join(__dirname),
        // },
    },

    //loader
    module: {
        rules: [
            //定义了不同模块对应的loader
            //正则匹配.css后缀的文件用什么打开
            {test:/\.css$/,use:['style-loader','css-loader']},
            //less
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //处理图片文件的loader
            //如果需要调用loader只有一个,则传递一个字符串也行,如果有多个loader,则必须指定数组
             {test:/\.jpg|png|gif$/,use:'url-loader?limit=1024'},
            //处理高级js语法
            //排除modulus文件夹
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}