<template>
  <view id="wrapper">
   <view class="content">
    <view class="box">
      <tag />
      <virtual-list
        :height="500"
        :item-data="showList"
        :item-count="showList.length"
        :item-size="100"
        :item="Articles"
        width="100%" />
      <!-- <articles v-for="item in showList" :key="item.id" :value="item"/> -->
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
import { ScrollView } from '@tarojs/components';
import { API } from '../../api';

export default Vue.extend({
  data () {
    return {
      Articles,
      showList: [],
      isShow: true,
      num: 3,
      inputValue:'',

    }
  },
  components: {
    ScrollView,
    Tag,
    Articles,
    NodeNav
  },
  created() {
    Taro.request({
      // url: '/api/topics/latest.json',
      url: API.getAllList(),
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // this.contextData = res.data
        const listData =res.data
        this.showList =res.data
        console.log('topics/latest.json',this.showList)
        this.bus.$on("inputData", (item) => {
          this.inputValue = item // 输入的内容
            console.log('inputValue',this.inputValue)
          // 得到InputData 的inputValue 输入的内容，根据输入内容渲染
          if (this.inputValue) {
            this.showList = listData.filter( (dataItem) => {
              return dataItem.title.includes(this.inputValue)
            })
          } else {
            this.showList =res.data
            console.log(this.showList)
          }
        })
        this.bus.$on("tagContent", (item2) => {
          this.tagContent = item2
            // console.log('tag',this.tagContent)

          //判断点击的是全部 showList 等于全部数据
          if(this.tagContent ==="全部") {
            return this.showList =res.data
          }

          // 点击Tag表现，显示已经有的列表对应的 node节点的内容。
          if (this.tagContent) {
            this.showList = listData.filter( (dataItem) => {
                return dataItem.node.title.includes(this.tagContent)
            })
          } else {
            this.showList =res.data
            console.log(this.showList)
          }
        })
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

