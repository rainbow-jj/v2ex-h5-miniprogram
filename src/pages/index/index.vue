<template>
  <view class="index">
    <header-bar />
    <main-bar />
    <footer />

  </view>
</template>

<script>
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import MainBar from '../../components/MainBar/index.vue'
import Footer from '../../components/FooterBar/index.vue'

export default {
  name: 'Index',
  components: {
    HeaderBar,
    MainBar,
    Footer
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
