<template>
  <view class="box-item">
    <view >
      <tbody class="tby-box">
        <row  style="margin-left: 0px; margin-right: 0px; max-width: 300px">
          <col class="msg-header" style="padding-left: 0px; padding-right: 0px;"><a href=""><img :src="value.member.avatar_normal" alt="头图" class="avater" ></a></col>
          <col  class="msg-mid">
            <row>
              <col class="titile">
                <strong><a href="" class="title-a">{{ value.title }}</a></strong>
              </col>
              <col class="foot-msg">
                <span><a class="s-lab">{{  value.node.title }}</a>&nbsp;•&nbsp;
                  <strong><a href="">{{ value.member.username }}</a></strong>
                    &nbsp;•&nbsp; 1 分钟前 &nbsp;•&nbsp; 最后回复来自
                  <strong><a href="" class="last-reply">{{ value.last_reply_by }}</a></strong>
                </span>
              </col>
            </row>
          </col>
          <col :span="1" class="msg-foot"><view class="art-num"><a href="">{{ value.replies }}</a></view></col>
        </row>
      </tbody>
    </table>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="less">
.box-item {
  padding: 10px;
  height: 70px;
  border-bottom:1px solid #DCDFE6;
  box-sizing: border-box;
}
.msg-header {
  width: 48px;
  margin-left:14px;
  line-height: 300%;
}
.title {
  width: 100%;
}
.title-a {
  color: #afb9c1;
  /* 标题太长 */
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-a:active,.title-a:hover {
  color: #778087;
  text-decoration: underline;
}

.foot-msg a{
  color: #778087;
  font-size: 14px;
}
.foot-msg {
  margin-top: 10px;
  font-size: 12px;
}
.foot-msg>span>a{
  background-color: #ccc;
  font-size:12px;
}
// .foot-msg>span>a:link,
// .foot-msg>span>:visited,
// .foot-msg>span>a:hover,
// .foot-msg>span>a:active {
//   cursor: pointer;
//   color: #999;
//   border-radius: 2px;
//   text-decoration: none;
//   background-color: #f5f5f5;
// }
.foot-msg>span>strong>a:hover {
  text-decoration: underline;
}
.art-num {
  width: 60px;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;

}
.art-num a {
  line-height: 450%;
  background-color: grey;
  border-radius: 99px;
  color: #f5f5f5;
  font-size: 12px;
  padding: 0 12px;
  font-weight: bold;
}
img.avater{
  vertical-align: bottom;
  width: 48px;
  height: 48px;
}

tbody.tby-box{
  width: 100%;
}
</style>
