<template>
  <view class="cell" >
    <view v-model="activeIndex" >
      <tag
        v-for="(item,index) in Navtitle"
        :key="item"
        :item="item"
        :active="index === activeIndex"
        @click="handleClick(index)"
      />
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from './Tag.vue'
export default Vue.extend({
  data () {
    return {
      Navtitle: ['技术','创意','好玩','Apple','酷工作','交易','城市','问与答','最热','全部','R2'],
      activeIndex:9, // 默认点击的是下标为 9
    }
  },
  components: {
    Tag,
  },
  methods: {
    handleClick(index) {
      // 接收 Tag.vue传递过来的点击 ，将点击的index 通过上面 @click="handleClick(index) 将index 传递过来。
      // :active="index === activeIndex" 将active 设置为要变得状态，所以就让已经显示点击的状态：activeIndex 等于传递过来的 index
      // active 对应的就是 子组件传递过来的 index 需要改变的样式下标了。
      this.activeIndex = index
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

</style>
