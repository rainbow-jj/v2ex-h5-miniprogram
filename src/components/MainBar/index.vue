<template>
  <view id="wrapper">
   <view class="content">
    <view class="box">
      <tag />
      <articles v-for="item in contextData" :key="item.id" :value="item"/>
       <view class="inner">
          <view class="more" @tap="showMore">更多 >></view>
        </view>
    </view>
    <node-nav />
   </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import Tag from './List.vue';
import Articles from './Articles.vue';
import NodeNav from './NodeNav.vue';
import Taro from '@tarojs/taro';


export default Vue.extend({
  data () {
    return {
      contextData: '',
      isShow: true,
      num: 3,
      // nodelist: ['问与答', '分析发现', '分析创造', '奇思妙想', '分析邀请码', '自言自语', '随想', '设计', 'Blog']
    }
  },
  components: {
    Tag,
    Articles,
    NodeNav
  },
  created() {
    const that = this
    Taro.request({
      url: 'http://192.168.1.10:10086/api/topics/latest.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // const contextData  = res.data
        that.contextData = res.data
        // console.log(that.contextData)

      }
    })
  },
  methods: {
  showMore() {
    this.isShow = !this.isShow;
    this.num = this.isShow? 3: this.contextData.length;
    // this.txt = this.isShow?  '显示全部':'收起'
    }
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
  .inner {
    text-align: right;
    padding: 10px;
    word-break: break-word;
    font-size: 28px;
    line-height: 150%
}
.more {
  color: #778087;
}

</style>

