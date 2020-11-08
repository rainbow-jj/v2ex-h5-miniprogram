<template>
  <view class="cell" >
    <view v-model="activeIndex" >
      <tag
        v-for= "(item,index) in Navtitle"
        :key ="item"
        :index="index"
        :item="item"
        :active = "index === activeIndex"
      />
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Tag from './Tag.vue'
export default Vue.extend({
  data () {
    return {
      Navtitle: ['技术','创意','好玩','Apple','酷工作','交易','城市','问与答','最热','全部','R2'],
      activeIndex:9,
    }
  },
  components: {
    Tag,
  },
})
</script>

<style lang="less">
.cell {
  font-size: 28px;
  line-height: 280%;
  text-align: left;
  border-bottom: 2px solid #e2e2e2;
}

</style>
