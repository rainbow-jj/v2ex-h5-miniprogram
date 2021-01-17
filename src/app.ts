import Vue from 'vue'
// import store from './store'

import './app.less'
import './assets/iconfont/iconfont.css'
import directives from './plugins/directives'
import VirtualList from '@tarojs/components/virtual-list'
import { ScrollView } from '@tarojs/components'



Vue.use(directives)

var bus = new Vue();
Vue.prototype.bus = bus

Vue.use(VirtualList);

const App = new Vue({
  // store,
  // onShow (options) {
  // },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
