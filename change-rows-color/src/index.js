//1. 使用ES6导入语法，导入JQuery
import $ from 'jquery'

//导入样式(在webpack中，一切皆模块，都可以通过es6语法进行导入和使用)
import './css/index.css'
import './css/index.less'

//jpg:导入图片,得到图片文件
import logo from "./images/logo.jpg"
// jpg2 给img标签的src动态赋值
$('.box').attr("src",logo)


//2. 定义jq的入口函数
$(function(){
    //3.实现奇偶行变色
    $('li:odd').css('background-color','yellow')
    $('li:even').css('background-color','pink')
})
//定义装饰器函数
function info(target) {
    target.info = "person info"
}
//定义一个普通的类
@info
class person{}

consle.log(person.info)