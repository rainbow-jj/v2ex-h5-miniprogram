<template>
  <view class="article-item" :style="css">
    <view class="article-content">
      <view  class="article-row">
        <view class="col-left">
          <view  class="col-two">
            <view class="content-row" >
              <view class="content-row-one">
                <view href="" class="img">
                  <image :src="data[index].member.avatar_normal" alt="头图" class="avater" @tap="gotoUser(data[index].member.id)"/>
                </view>
                <view href="" class="title-tag">{{ data[index].node.title }}</view>
                &nbsp;•&nbsp;
                <view class="username small" @tap="gotoUser(data[index].member.id)">{{ data[index].member.username }}</view>
              </view>
              <view class="content-row-two">
                <text class="article-title">{{ data[index].title }}</text>
              </view>
              <view class="row-gap"></view>
              <view class="content-row-three small fade">
                  {{timeAgo(data[index].last_modified)}} &nbsp;•&nbsp; 最后回复来自
                  <view href="" class="last-reply">{{ data[index].last_reply_by }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="col-three">
          <view href="" class="count">{{ data[index].replies }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Taro from '@tarojs/taro'
import { common } from '../../mixin'

export default Vue.extend({
  props: ['index', 'data', 'css'],
  // props: {
  //   value: {
  //     type: Object
  //   }
  // },
  methods: {
    gotoUser (e) {
      // console.log('e',e)
      Taro.navigateTo({  // 导航到user 路径
        url: `/pages/user/index?id=${e}`,
      })
    }
  },
  mixins: [common]
})
</script>

<style lang="less">
.article-item {
  box-sizing: border-box;
  padding: 20px;
  word-break: break-word;
  font-size: 28px;
  line-height: 150%;
  text-align: left;
  border-bottom: 2px solid #e2e2e2;
  // height: 400px;
}
.item-box {
  width: 100%;

  }
.article-content {
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  height: 100%;

}
.col-three {
  display: flex;
  align-items: center;

}

.article-row {
  height: 100%;
  display: flex;
  justify-content: space-between;
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
.content-row-three {
  padding-left:58px;

}
.content-row-two {
  padding-left:58px;
  max-width: 540px;
}
.fade {
  color: #ccc;
}
.small {
    font-size: 24px;
}
.article-title,.last-reply {
  color: #778087;
  word-break: break-word;
}
.article-title {
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.title-tag {
  margin-left: 10px;
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
  background-color: #aab0c6;
  display: inline-block;
  padding: 4px 20px;
  -moz-border-radius: 24px;
  -webkit-border-radius: 24px;
  border-radius: 24px;
  text-decoration: none;
  margin-right: 10px;
}
</style>
