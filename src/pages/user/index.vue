<template>
  <view class="user">
    <header-bar />
    <user-node />
  </view>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import UserNode from '../../components/UserNode/index'

export default {
  // name: 'User',
  components: {
    HeaderBar,
    UserNode
  }
}
</script>

<style>
.user {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60p */

}
</style>
