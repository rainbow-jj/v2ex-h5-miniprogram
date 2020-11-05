import Vue from 'vue'
import store from './store'

import './app.less'

// Vue.config.productionTip = false
import directives from './plugins/directives'

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
