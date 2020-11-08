<template>
  <view id="wrapper">
   <view class="content">
    <slot></slot>
    <view class="box">
      <nav-bar  />

    </view>

   </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './List.vue';



export default Vue.extend({
  data () {
    return {

    }
  },
  components: {
    NavBar,
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

