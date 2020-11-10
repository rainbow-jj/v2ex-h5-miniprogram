<template>
   <view class="box">
     <view class="cell flex-one-row">
       <text class="fade">V2EX</text>
        <text class="look-node">浏览全部节点 -></text>
     </view>
     <view class="cell">
       <view class="table">
        <view class="tbody">
          <view class="tr">
            <view class="td-left">分享与探索</view>
            <view class="col"></view>
            <view class="td-right">
              <view class="tagtext">问与答 分析发现 分析创造 奇思妙想 分析邀请码 自言自语 随想 设计 Blog</view>
            </view>
          </view>
        </view>
       </view>
     </view>
   </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
    }
  }
})
</script>

<style lang="less">
.box {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0,0,0,.1);
  border-bottom: 2px solid #e2e2e2;
}
.cell {
  padding: 10px;
  word-break: break-word;
  font-size: 28px;
  line-height: 150%;
  text-align: left;
  border-bottom: 2px solid var(--box-border-color);
}
.flex-one-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fade {
    color: #ccc;
    font-weight: bold;
  }
  .look-node {
    color: #778087;
    word-break: break-word;
  }
}
.table {
  box-sizing: border-box;
  display: flex;
}
.tr {
  display: flex;
  color: #778087;
}
.td-left {
  width: 260px;
  text-align: center;
  margin: auto 0;
}
.col {
  width:20px;
}

</style>
