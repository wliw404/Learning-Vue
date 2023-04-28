// 文章相关的 API 接口都封装在此
import escook from '@/utils/escook_axios'

// 向外按需导出一个 API 函数
export const getArticleListAPI = function(_page, _limit) {
  return escook.get('/articles', {
    // 请求参数
    params: {
      _page,
      _limit
    }
  })
}
