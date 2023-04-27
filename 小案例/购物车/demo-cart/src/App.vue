<!--购物车案例-->
<template>
  <div class="app-container">
    <!--heater头部区域-->
    <Header></Header>
    <!--循环渲染数据-->
    <Goods
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :title="item.goods_name"
        :imgSrc="item.goods_img"
        :price="item.goods_price"
        :state="item.goods_state"
        :count="item.goods_count"
        @state-change="getNewState"
    >
      <template #counterSlot>
        <Counter :num="item.goods_count" @num-change="getNewNum(item,$event)"></Counter>
      </template>
    </Goods>
    <!--<Goods v-for="item in list" :key="item.id" :goods="item"></Goods>-->
    <Footer :isfull="fullState" :amount="amt" :all="total" @full-change="getFullChange"></Footer>
  </div>
</template>

<script>
//导入axios请求库
import axios from 'axios'
// 导入需要的组件
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import bus from '@/components/eventBus.js'

//插槽
//导入 Counter 组件
import Counter from '@/components/Counter/Counter.vue'

export default {
  components: {
    Counter,
    Header,
    Goods,
    Footer,
  },
  data() {
    return {
      //用来存储购物车的列表数据，默认为空
      list: []
    }
  },
  methods: {
    //封装请求列表数据的方法
    async initCartList() {
      //调用axios的get方法，请求列表数据
      const {data: res} = await axios.get('https://www.escook.cn/api/cart')
      //只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
      if (res.status == 200) {
        this.list = res.list
      }
    },

    //接收子组件传递过来的数据
    getNewState(val) {
      console.log(val)
      //形参中的e，就是子组件通过$emit()传递到父组件中的数据,格式为{id，value}
      this.list.some(item => {
        // console.log((item.id)==val.id)
        if (item.id == val.id) {
          item.goods_state = val.value
          return true
        }
      })
    },

    //接收footer子组件传递过来的全选按钮的状态
    getFullChange(val) {
      console.log(val)
      this.list.forEach(item => {
        item.goods_state = val
      })
    },

    //插槽
    getNewNum(item,e) {
      item.goods_count = e
    }

  },
  created() {
    //调用请求数据的方法
    this.initCartList()

    //绑定bus
    bus.$on('share', (val) => {
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  //计算属性
  computed: {
    //动态计算出全选的状态是true还是false
    fullState() {
      return this.list.every(item => item.goods_state)
    },

    //已勾选商品的总价格
    amt() {
      //1. 先 filter 过滤
      //2. 再reduce 累加
      return this.list
          .filter(item => item.goods_state)
          .reduce((total, item) => {
            return total += item.goods_price * item.goods_count
          }, 0)
    },

    //已勾选商品的总数量
    total() {
      return this.list
          .filter(item => item.goods_state)
          .reduce((t, item) => {
            return t += item.goods_count
          }, 0)
    },
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
