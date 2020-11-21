<template>
  <view id="wrapper">
    <view class="content">
      <view class="box">
        <view class="table-box">
          <view class="table-body">
            <view class="table-tr">
              <view class="table-td-one"><image :src="usercontent.avatar_large" class="user-img"></image></view>
              <view class="table-td-two"></view>
              <view class="table-td-three">
                <view class="fr"></view>
                <text class="user-title">{{usercontent.username}}</text>
                <text class="gray">V2EX 第 467131 号会员，加入于 {{parseDate(usercontent.created)}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { getCurrentInstance } from '@tarojs/taro';
import Vue from 'vue';
import { common } from '../../mixin';

export default Vue.extend({
  data () {
    return {
      usercontent: {}
    }
  },
  created () {
    const that = this
    const { id } = getCurrentInstance().router?.params!;
    Taro.request({
      url:'http://192.168.1.10:10086/api/members/show.json',
      data: {
        id
      },
      success: function (res) {
        that.usercontent = res.data
        console.log('that.usercontent',that.usercontent)
      }
    })
  },
  mixins:[common],
})
</script>

<style lang="less">
  #wrapper {
    text-align: center;
    background-color: #22303f;
  }
  .content {
    min-width: 600px;
    max-width: 2200px;
    width: auto;
    padding: 10px;
    margin: 0 auto;
  }
  .box {
    background-color: #18222d;
    border-radius: 6px;
    color: #d1d5d9;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    border-bottom: 2px solid #22303f;
  }
  .inner {
    text-align: left;
    word-break: break-word;
    font-size: 28px;
    line-height: 150%
  }
  .table-box {
    width: 100%;
    box-sizing: border-box;
    border-color: grey;
  }
  .table-body {
    vertical-align: middle;

  }
  .table-td-one {
    width: 112px;
    vertical-align: top;

  }
  .table-td-two {
    width: 20px;
  }
  .table-td-three {
    display: flex;
    flex-direction: column;
  }
  .table-tr {
    display: flex;
  }
  .user-img {
    max-width: 72px;
    max-height: 72px;
    border-radius: 4px;
    vertical-align: bottom;
  }
  .user-title {
    color: #d1d5d9;
    font-size: 44px;
    font-weight: 1000;
    line-height: 120%;
    margin: 10px 0 10px;
    text-align: start;
  }
  .gray {
    color: #738292;
    font-size: 24px;
    text-align: start;
  }

</style>

