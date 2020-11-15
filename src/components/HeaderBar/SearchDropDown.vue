<template>
  <view class="search-dropdown default-theme" v-show-extend="show">
    <view  class="search clearfix" v-show="itemlist.length">
      <view v-outside-click="sreachClose" class="searchBox" :class="{isClick}" @tap="searchhandler" >
        <image  :src="search" class="searchIcon"/>
        <input v-model="inputValue" class="searchInput" :onInput="handleChange(inputValue)" />
      </view>
      <view class="search-item-group cell">
        <text>节点 / Nodes</text>
        <view v-for="item in datalist" :key="item" @tap="handleSelect">
          <view>{{ item.name }}</view>
          <view class="search-item-group cell">
            <view>Google {item}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
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
    'itemlist' :Function,
    //  isShow : Boolean,
    //  isClick: Boolean
  },
  methods: {
      sreachClose: function (){
       this.isClick = false
     },
      searchhandler: function () {
        this.isClick = !this.isClick
      },
      handleChange: function(e){
        console.log(e)

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
</style>
