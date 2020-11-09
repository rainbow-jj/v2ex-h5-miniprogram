import Vue from 'vue'
import store from './store'
import axios from 'taro-axios'

import './app.less'

// Vue.config.productionTip = false
import directives from './plugins/directives'

Vue.use(directives)
// axios.defaults.baseURL = 'https://www.v2ex.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.timeout = 2500;


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
