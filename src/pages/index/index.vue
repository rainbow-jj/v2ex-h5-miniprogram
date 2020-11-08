<template>
  <view class="index">
    <HeaderBar />
    <Content />
    <!-- <NumberDisplay/>
    <NumberSubmit/> -->
  </view>
</template>

<script>
// import NumberDisplay from '../../components/NumberDisplay.vue'
// import NumberSubmit from '../../components/NumberSubmit.vue'
import HeaderBar from '../../components/HeaderBar/HeaderBar.vue'
import Content from '../../components/NavBar/index.vue'

export default {
  name: 'Index',
  components: {
    // NumberDisplay,
    // NumberSubmit,
    HeaderBar,
    Content
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
