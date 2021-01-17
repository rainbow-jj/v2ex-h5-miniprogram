<! –– row.vue 单项组件 ––>
<template>
  <view
    :class="index % 2 ? 'ListItemOdd' : 'ListItemEven'"
    :style="css"
  >
    Row {{ index }} : {{ data[index] }}
  </view>
</template>

<script>
export default {
  props: ['index', 'data', 'css']
}
</script>
