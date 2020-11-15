import Vue from 'vue'
import store from './store'

import './app.less'

import directives from './plugins/directives'

// Vue.use
Vue.use(directives)

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
