<template>
  <view id="wrapper">
    <view class="content">
      <view class="box">
        <view class="header">
          <view class="left">
            <view class="logo">V2EX</view>
            <view>&nbsp;>&nbsp;</view>
            <text class="login-title">登录 &nbsp;</text>
            <view class="iconfont lock">&#xe746;</view>
          </view>
          <view class="right">
            <view>我忘记密码了</view>
          </view>
        </view>
        <view  class="log-problem" v-show="show">
          登录中遇到一些问题
            <view>请输入用户名</view>
            <view>请输入密码</view>
            <view>请输入验证码</view>
        </view>
        <view class="cell">
          <form class="cell-box" @submit="formSubmit">
            <input type="hidden"/>
            <view >
              <view class="input-content">
                <view class="input-box">
                  <text class="item">用户名</text>
                  <input class="input-length" type="text" />
                </view>
                <view class="input-box">
                   <text class="item">密码</text>
                  <input  class="input-length" type="text" />
                </view>
                <view class="verify">
                  <Verify ref="loginVerifyRef" @error="error" :showButton="false" @success="success" :width="'282px'" :height="'82px'" :fontSize="'16px'" :type="1"></Verify>
                </view>
                <view class="input-box">
                   <text class="item">机器？</text>
                  <input  class="input-length" type="text" placeholder='请输入上图的验证码'/>
                </view>
                <view>
                  <button form-type="submit" class="loading">登录</button>
                </view>
              </view>
            </view>
          </form>
        </view>
      </view>
      <view class="box">
        <view class="header">其他登录方式</view>
        <view class="other-way-cell">
          <image class="other-way" src="./assets/btn_google_signin_light_normal_web@2x.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue';
import Verify from 'vue2-verify';

export default Vue.extend({
  data () {
    return {
      verify: false,
      show:false
    }
  },
   components: {
    Verify,
  },
  methods:{
     dealTriVer() {
      console.log( 'refs:',this.$refs.loginVerifyRef.$refs.instance.checkCode())
      this.$refs.loginVerifyRef.$refs.instance.checkCode()
    },
    formSubmit(values) {
      console.log('values',values)
      this.dealTriVer()
      if (!this.verify) {
        this.show = true
        return
      }
    },
    success(obj) {
      this.verify = true
      // 回调之后，刷新验证码
      obj.refresh()
    },
    error(obj) {
      this.verify = false
      // 回调之后，刷新验证码
      obj.refresh()
    }
  }
})
</script>

<style lang="less">
#wrapper{
  background-color: #e2e2e2;
  text-align: center;
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 10px;
  height: 38px;
  line-height: 150%;
  // align-items: center;
  border-bottom:2px solid #e2e2e2;
}
.log-problem {
  font-size: 14px;
  color: #202020;
}
#wrapper .content {
  // max-width: 600px;
  width: auto;
  padding: 12px;
}
.content {
  margin: 0 auto;
  max-width: 2200px;
}
.box {
  background-color:#fff ;
  align-items: center;
  margin-bottom: 10px ;
  color: #000;
}
.left {
  display: flex;
}
.lock{
    font-size: 34px;
  }
.right {
  width: 180px;

  color:#778087;
}
.iconfont {
  width: 40px ;
  height: 60px;
}
.logo {
  color: #778087;
  font-weight: 500;
}
.login-title {
  font-weight: 1000;

}
.cell {
  font-size: 30px;
  line-height: 300%;
  text-align: left;
  margin: 0 15px;
  word-break: break-word;
}
.input-box{
  display: flex;
  align-items: center;
  padding-bottom: 8px;

}
.weui-input{
  background:none;
}
.input-length{
  text-emphasis: none;
  background-color:#fff;
  width:440px;
  height: 60px;
  border:1px solid #ccc;
}
.item{
  width: 120px;
  color: #000;
}
.ver-code {
  width: 560px;
  height: 160px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.other-way{
  width: 400px;
  height: 80px;
}
.cell-box{
  width: 100%;
}
.loading {
  background-image:url("/src/components/Signin/assets/bg_blended_light.png") ;
  background-color: #fff;
  color: #333;
  text-shadow: 0 1px 0 #fff;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 1px 0 rgba(66,66,77,.1);
  padding: 8px 16px;
  border: 1px solid rgba(80,80,90,.2);
  border-bottom-color: rgba(80,80,90,.35);
  border-radius: 6px;
  font-size: 30px;
  font-family: Arial,sans-serif;
  display: inline-block;
  line-height: 1.8;
  outline: 0;
}
.other-way-cell {
  align-items: center;
  display: flex;
  justify-content: center;
  // line-height: 280%;
  height: 120px;
}
.verify {
  .verify-change-area {
    display: none;
  }
  .verify-code-area {
    display: none;
  }
}
</style>

verify
