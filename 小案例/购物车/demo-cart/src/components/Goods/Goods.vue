<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox" class="custom-control-input" :id="'cb'+id" :checked="state" @change="stateChange"/>
        <label class="custom-control-label" :for="'cb'+id">
          <!-- 商品的缩略图 -->
          <img :src="imgSrc" alt=""/>
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <!--<h6 class="goods-title">title</h6>-->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
<!--        <Counter :num="count" :id="id"></Counter>-->
        <slot name="counterSlot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter.vue'

export default {
  components: {
    Counter,
  },
  props: {
    //要渲染的数据
    id: {
      //id是必填项。
      required: true,
      type: Number,
    },
    title: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: "",
    },
    state: {
      default: true,
      type: Boolean,
    },
    //复用率不高
    // goods: {
    //   type: Object,
    //   default: {}
    // }
    //商品购买数量

    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    //只要复选框的选中状态发生了变化，就会调用这个函数
    stateChange(e) {
      const newState = e.target.checked
      // console.log(this)
      // const id = this.id
      this.$emit('state-change', {id: this.id, value: newState})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }

  padding: 10px;
  display: flex;

  .thumb {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }

    .goods-info-bottom {
      display: flex;
      justify-content: space-between;

      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
