<template>
  <view id="bottom">
    <view class="content">
      <view class="inner">
        <view class="fr">
          <view >© 2020 V2EX · 7ms · 3.9.8.5</view>
          <view class="about-box">
            关于 &nbsp;·&nbsp; Language
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
// import Vue from 'vue'
// export default Vue.extend({

// })
</script>

<style lang="less">
#bottom {
  border-top: 2px solid rgba(0,0,0,.22);
  background-color: #fff;
  text-align: center;
  color: #999;
  padding: 0 15px;
  height: 60px;
  line-height: 150%;
}

.fr {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 500;
}
.about-box {
  color: #778087;
  font-weight: bold;
  word-break: break-word;
}
</style>
