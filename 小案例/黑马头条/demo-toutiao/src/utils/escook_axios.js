import axios from 'axios'

const escook = axios.create({
  // 指定请求的根路径
  baseURL: 'https://www.escook.cn'
})

export default escook
