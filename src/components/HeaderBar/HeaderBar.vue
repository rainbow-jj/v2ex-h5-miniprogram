<template>
  <view class="container">
    <view class="logoLink"><image id="logo" src="./assets/v2ex@2x.png" lazyLoad @tap="goToIndex"/></view>
    <view  class="search clearfix" >
      <view v-outside-click="sreachClose" class="searchBox" :class="{isClick}" @tap="searchhandler" >
        <image  src="./assets/search_icon_light.png" class="searchIcon"/>
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
    <view v-cloak>
      <view v-outside-click="close">
        <view @tap="isShow=!isShow">
          <image src="./assets/ellipse_light.png" class="showIcon" />
        </view>
        <view class="dropDown" v-show="isShow" >
          <view class="cellBox">
            <view class="item" href="/">首页</view>
            <view class="item" href="/signup">注册</view>
            <view class="item" @tap="gotoSignin">登录</view>
          </view>
          <view class="cell">
            <view href="settings/night/toggle?once=40365" class="top">
              <image src="./assets/toggle-light.png" class="taggleIcon"/>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';

export default {
  data () {
    return {
      inputValue: '',
      isShow: false,
      isClick: false,
      datalist: [], //调api时渲染

    }
  },
  methods: {
    sreachClose: function (){
      this.isClick = false
    },
    close: function (){
      this.isShow = false
    },
    searchhandler: function () {
      this.isClick = !this.isClick
    },
    handleSelect: function () {
      Taro.navigateTo({  // 导航到google
        url: `google.com`,
      })
    },
    goToIndex:function () {
      Taro.redirectTo({
        url: '/pages/index/index'
      })
    },
    handleChange: function(inputValue2){
        this.bus.$emit("inputData",inputValue2)
      // 获取 nodes的 api 然后进行判断过滤。
      // console.log('taro.env', Taro.getEnv(), Taro.ENV_TYPE)

    },
    gotoSignin: function (e) {
      console.log('gotoSignin',e) //
      Taro.navigateTo({  // 导航到user 路径
        url: '/pages/login/index',
      })
    }
  },
  computed: {
    length: function() {
      return this.datalist.length
    },
  }
}
</script>

<style lang="less" >

[v-cloak] {
  display: none;
}
.container {
  width: 100%;
  height: 80px;

  border-bottom: 1px solid rgba(0,0,0,.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
#logo {
  width: 160px;
  height: 62px;
  display: inline-block;
  line-height: 80px;
  padding-top: 10px;
}

.dropDown {
  position: absolute;
  background-color: #fff;
  right: 1px;
  top: 84px;
  z-index: 1000;
  display: var(--show-dropdown);
  width: 300px;
  box-shadow: 0 2px 25px rgba(0,0,0,.2);
  border-bottom: 1px solid #e2e2e2;
}
.cellBox {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px;
  word-break: break-word;
  text-align: left;
  line-height: 150%;
  padding: 20px;
  border-bottom: 2px solid #e2e2e2;
}
.item {
  font-size: 32px;
  display: block;
  // padding: 12px;
  border-radius: 4px;
  color: #556;
  text-decoration: none;

}
.taggleIcon {
  width: 90px;
  height: 20px;
}
.cell {
  display: flex;
  justify-content: start;
  // margin-left: 20px;
}

.logoLink {
  // padding: 20px;
  display: block;
  width: 200px;
  height: 80px;
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
.weui-input  {
  width: 200px;
  height: 32px;
  display: block;
  width: 4.26667rem;
  height: 100%;
  margin-left: 10px;
  text-align: start;
  display: block;

}
.isClick {
  width: 400px;
  border-color: #a6a6b0;

}
.showIcon {
  height: 80px;
  width: 80px;
  margin-top: 20px;
}
input {
  outline: none;
  border: none;

}
</style>
