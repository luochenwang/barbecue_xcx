import Vue from 'vue'
import store from './store'
import sidebar from "./components/sidebar";
import auth from "./components/auth";
import webheader from "./components/webheader";
import { createCache } from "./libs/globalData";
const globalData = createCache();
import './app.scss'

// Vue.config.productionTip = false
Vue.component('auth', auth);
Vue.component('sidebar', sidebar);
Vue.component('webheader', webheader);
const App = new Vue({
  store,
  onShow (options) {
    let userInfo = globalData.get("userInfo");
    store.commit('set_useriNfo',userInfo);
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})


export default App
