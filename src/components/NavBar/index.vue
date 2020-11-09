<template>
  <view id="wrapper">
   <view class="content">
    <slot></slot>
    <view class="box">
      <tag />
      <articles v-for="item in contextData" :key="item.id" :value="item" />
    </view>

   </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import Tag from './List.vue';
import Articles from './Articles.vue';
import Taro from '@tarojs/taro';

export default Vue.extend({
  data () {
    return {
      contextData: ''
    }
  },
  components: {
    Tag,
    Articles,
  },
  created() {
    const that = this
    Taro.request({
      url: '/api/topics/latest.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // const contextData  = res.data
        that.contextData = res.data
        console.log('contextData',that.contextData)
      }
    })
  }
})
</script>

<style lang="less">
  #wrapper {
    text-align: center;
    background-color: #e2e2e2;
  }
  .content {
    min-width: 600px;
    max-width: 2200px;
    width: auto;
    padding: 10px;
    margin: 0 auto;
  }
  .box {
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    border-bottom: 2px solid #e2e2e2;
  }
</style>

