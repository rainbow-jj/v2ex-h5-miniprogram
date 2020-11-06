<template>
  <view class="cell" >
    <view v-model="activeIndex" @click="handleClick">
      <a href="" :class="[isClick ? 'tab_current':'tab']" >技术</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']">创意</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >好玩</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >Apple</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >酷工作</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >交易</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >城市</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >问与答</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >最热</a>
      <a  href=""  :class="[isClick ? 'tab_current':'tab']" >全部</a>
      <a href=""  :class="[isClick ? 'tab_current':'tab']" >R2</a>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import { AtTag } from 'taro-ui';

export default Vue.extend({
  data () {
    return {
      // 默认的选择是 第10个 全部
      activeIndex:"10",
      isClick: false
    }
  },

  methods: {
    handleClick(e) {
      console.log(e)
      return this.isClick = true
    }
  }
})
</script>

<style lang="less">
.cell {
  font-size: 28px;
  line-height: 280%;
  text-align: left;
  border-bottom: 2px solid #e2e2e2;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
a.tab:link, a.tab:visited, a.tab:active {
    display: inline-block;
    font-size: 26px;
    line-height: 32px;
    padding: 10px 12px;
    margin-right: 10px;
    border-radius: 6px;
    color: #555;
}
a:active, a:link, a:visited {
    color: #778087;
    text-decoration: none;
    word-break: break-word;
}
a.tab_current:active, a.tab_current:link, a.tab_current:visited {
    display: inline-block;
    font-size: 28px;
    line-height: 28px;
    padding: 10px 16px;
    margin-right: 10px;
    border-radius: 6px;
    background-color: #334;
    color: #fff;
}
// .tab {
//   background-color: yellow;
// }
// .tab_current {
//   color: red;
// }
</style>
