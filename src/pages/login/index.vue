<template>
  <view class="login">
    <header-bar />
    <siginin />
    <ro-footer />
  </view>
</template>

<script>
import Siginin from '../../components/Signin/Siginin';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import RoFooter from '../../components/FooterBar'

export default {
  components: {
    HeaderBar,
    Siginin,
    RoFooter
  }
}
</script>

<style>
.login {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60p */

}
</style>
