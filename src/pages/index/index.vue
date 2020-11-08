<template>
  <view class="index">
    <HeaderBar />
    <NavBar />
    <!-- <NumberDisplay/>
    <NumberSubmit/> -->
  </view>
</template>

<script>
// import NumberDisplay from '../../components/NumberDisplay.vue'
// import NumberSubmit from '../../components/NumberSubmit.vue'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import NavBar from '../../components/NavBar/index.vue'

export default {
  name: 'Index',
  components: {
    // NumberDisplay,
    // NumberSubmit,
    HeaderBar,
    NavBar
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
