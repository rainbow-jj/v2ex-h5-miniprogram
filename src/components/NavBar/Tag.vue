// 自制 Tag 标签
<template>
  <view
  :class="['tab', { tab_current: isClick || active }]"
  :index='index'
  @tap="handleClick"
  >{{ item }}</view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      // // 默认的选择是 第10个 全部
      // activeIndex:"10",
      isClick: false
    }
  },
  props: {
    item: {
      type: String,
      // default: "",
    },
    index: {
      type: Number,
      default: null,
    },
    active: Boolean,

  },

  methods: {
    handleClick(e) {
      console.log(e)
      e.preventDefault()
      // 获取到点击的内容
      //  console.log('inner:',e.toElement.innerText)
      //
      this.isClick = !this.isClick
      console.log(this.isClick)
    }
  }
})
</script>

<style lang="less">

.tab {
    display: inline-block;
    font-size: 26px;
    line-height: 32px;
    padding: 10px 12px;
    margin-right: 10px;
    border-radius: 6px;
    color: #555;
}
// a:active, a:link, a:visited {
//     color: #778087;
//     text-decoration: none;
//     word-break: break-word;
// }
// a.tab_current:active, a.tab_current:link, a.tab_current:visited {
//     display: inline-block;
//     font-size: 28px;
//     line-height: 28px;
//     padding: 10px 16px;
//     margin-right: 10px;
//     border-radius: 6px;
//     background-color: #334;
//     color: #fff;
// }
.tab_current {
    display: inline-block;
    font-size: 28px;
    line-height: 28px;
    padding: 10px 16px;
    margin-right: 10px;
    border-radius: 6px;
    background-color: #334;
    color: #fff;
}
</style>
