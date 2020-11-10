<template>
  <view id="bottom">
    <view class="content">
      <view class="inner">
        <view class="fr">
          <view>© 2020 V2EX · 7ms · 3.9.8.5</view>
          <view class="about-box">
            关于.Language
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="less">
#bottom {
  border-top: 2px solid rgba(0,0,0,.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 20px;
}
.fr {
  display: flex;
  justify-content: space-between;
}
.about-box {
  color: gray;
  font-weight: bold;
}
</style>
