<template>
  <view class="article-item">
    <view class="item-box">
      <view class="article-content">
        <view  class="article-row">
          <view class="col-one">
            <view href="" class="img"><image :src="value.member.avatar_normal" alt="头图" class="avater" @tap="gotoUser"/></view>
          </view>
          <view class="col-gap"></view>
          <view  class="col-two">
            <view class="content-row">
              <view class="content-row-one">
                <view href="" class="title-tag">{{ value.node.title }}</view>
                 &nbsp;•&nbsp;
                <view class="username small" @tap="gotoUser">{{ value.member.username }}</view>
              </view>
              <view class="row-gap"></view>
              <view class="content-row-two">
                <text class="article-title">{{ value.title }}</text>
              </view>
              <view class="row-gap"></view>
              <view class="content-row-three small fade">
                  1 分钟前 &nbsp;•&nbsp; 最后回复来自
                  <view href="" class="last-reply">{{ value.last_reply_by }}</view>
              </view>
            </view>
          </view>
          <view class="col-three">
            <view href="" class="count">{{ value.replies }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Taro from '@tarojs/taro'
export default Vue.extend({
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    gotoUser () {
      // const { username:any, id: number } = this.value.member
      Taro.navigateTo({
        url: `/pages/user/index`,
      })
    }
  }
})
</script>

<style lang="less">
.article-item {
  padding: 10px;
  word-break: break-word;
  // background-position: 0 bottom;
  // background-repeat: repeat-x;
  font-size: 28px;
  line-height: 150%;
  text-align: left;
  border-bottom: 2px solid #e2e2e2;
}
.item-box {
  width: 100%;

}
.article-content {
  vertical-align: middle;
  display: flex;
  flex-direction: column;
}
.col-three {
  display: flex;
  // justify-content: center;
  // position: absolute;
  width: 140px;
  align-items: center;
}

.article-row {
  display: flex;


}
.avater {
  height: 48px;
  width: 48px;
  align-items: center;
  vertical-align: top;
}
.col-gap{
  width: 20px;
}
.row-gap {
  height: 10px;
}
.content-row-one, .content-row-three{
  display: flex;
}

.fade {
  color: #ccc;
}
.small {
    font-size: 24px;
}
.article-title,.last-reply {
  // color: #afb9c1;
  color: #778087;
  word-break: break-word;
}
.title-tag {
  background-color: #f5f5f5;
  font-size: 24px;
  line-height: 24px;
  display: inline-block;
  padding: 8px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: #999;
}
.username {
  color: #778087;
  font-weight: bold;
}
.last-reply {
      font-weight: bold;
}
.count{
  line-height: 24px;
  font-weight: 1400;
  color: #fff;
  background-color: #e5e5e5;
  display: inline-block;
  padding: 4px 20px;
  -moz-border-radius: 24px;
  -webkit-border-radius: 24px;
  border-radius: 24px;
  text-decoration: none;
  margin-right: 10px;
}
</style>
