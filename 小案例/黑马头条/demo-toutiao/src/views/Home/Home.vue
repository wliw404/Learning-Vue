<template>
  <div class="home-container">
    <van-nav-bar
      title="黑马头条"
      fixed
      placeholder
    />
    <!--导入，注册，并使用 ArticleInfo 组件-->
    <!--<p>{{artlist.length}}</p>-->
    <!--在使用组建的时候，如果某个属性名是小驼峰形式，则绑定属性的时候建议改写成连字符格式-->
    <!--下拉刷新-->
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <!--上滑加载-->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!--页面数据-->
        <ArticleInfo v-for="item in artlist"
                     :key="item.id"
                     :title="item.title"
                     :author="item.aut_name"
                     :cmt-count="item.comm_count"
                     :time="item.pubdate"
                     :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh >
  </div>
</template>

<script>
// 导入 escook_axios.js
import escook from '@/utils/escook_axios'

// 导入组件
import ArticleInfo from '@/components/Article/ArticleInfo'

export default {
  name: 'Home',
  components: {
    ArticleInfo
  },
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示条数
      limit: 10,
      // 文章数组
      artlist: [],
      // 是否正在加载下一页数据, 如果值为true ，则不会触发 load 事件
      // 每当下一页数据请求回来之后，要把 true 值改为 false
      loading: true,
      // 所有数据是否加载完毕了, 如果没有更多数据 值 = true
      finished: false,
      // 是否正在下拉刷新
      isLoading: true
    }
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await escook.get('/articles', {
        // 请求参数
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
      if (isRefresh) {
        // 下拉刷新
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // 上滑加载
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }
      // 新旧数据的拼接
      // 如果是上拉加载更多，那么应该是：
      // this.artlist = [旧数据，新数据]
      if (res.length === 0) {
        // 证明没有下一页数据了， 直接把 finished 改为 true ，表述数据加载完了
        this.finished = true
      }
    },
    // 只要 onLoad  被调用，就应该请求下一页数据
    onLoad() {
      console.log(1)
      // 1.让页码值 +1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新的处理函数
    onRefresh() {
      // console.log('下拉刷新')
      // 1.页码 +1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList(true)
    }
  },
  created() {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>
//.home-container{
//  /deep/ .van-nav-bar{
//    background-color: #007bff;
//  }
//  /deep/ .van-nav-bar__title{
//    color:#fff
//  }
//}
</style>
