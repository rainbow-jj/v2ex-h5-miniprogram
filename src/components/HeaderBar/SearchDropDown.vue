<template>
  <view  class="search clearfix" >
    <view v-outside-click="sreachClose" class="searchBox" :class="{isClick}" @tap="searchhandler" >
      <image  :src="search" class="searchIcon"/>
      <input v-model="inputValue" class="searchInput" :onInput="handleChange(inputValue)" />
    </view>
    <view class="search-item-group cell" v-show="length">
      <text>节点 / Nodes</text>
      <view v-for="item in datalist" :key="item" @tap="handleSelect">
        <view>{{ item.name }}</view>
        <view class="search-item-group cell">
          <view>Google {{item.name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import { API } from '../../api';

export default {
  data() {
    return {
      datalist: [],
      inputValue: '',
      isShow: false,
      isClick: false,
      search: require("./assets/search_icon_light.png").default,
    }
  },

  props: {

  },
  methods: {
      sreachClose: function (){
       this.isClick = false
     },
      searchhandler: function () {
        this.isClick = !this.isClick
        console.log('isFocus:',this.isClick)
      },
      handleChange: function(e){
        Taro.request({
          url: API.getSearchNode(),
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: (res) => {
            console.log('/nodes/show.json',res.data)
            this.itemlist = res.data
          }
        });
      }
  },
  computed: {
    length: function() {
      return this.datalist.length
    }
  }
}
</script>

<style>
 #search-result {
   display: block;
 }
 .searchBox {
  display: flex;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 40px;
  border: 1px #fafafa solid;
  background-color: #f9f9f9;
  width: 256px;
  height: 52px;
  text-align: left;
}
.searchIcon {
  height: 32px;
  width: 32px;
  margin-top: 9px;
}
.searchInput {
  align-items: left;
}
input {
  outline: none;
  border: none;
}
.isClick {
  width: 400px;
  border-color: #a6a6b0;
}
</style>
