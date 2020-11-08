// 自制 Tag 标签
<template>
  <view
  :class="['tab', { tab_current: active }]"
  @tap="handleClick"
  >{{ item }}</view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
    }
  },
  props: {
    item: {
      type: String,
    },
    active: Boolean,
  },
  methods: {
    handleClick() {
      // 将点击到的 自己命名'click'传递给父组件List.vue
      this.$emit('click')
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
