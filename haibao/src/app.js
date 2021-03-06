// const App = require('./utils/mtj-wx-sdk.js').App;
import Vue from 'vue'
import store from './store'
import sidebar from "./components/sidebar";
import auth from "./components/auth";
import webheader from "./components/webheader";
import consultLeads from "./components/consult_leads";
import downloadLeads from "./components/download_leads";
import proLeads from "./components/pro_leads";
import showFilter from "./components/show_filter";
import liveLeads from "./components/live_leads";
import { Block } from '@tarojs/components'
import { createCache } from "./libs/globalData";
import './utils/mtj-wx-sdk.js';
const globalData = createCache();
import './app.scss'

// Vue.config.productionTip = false
Vue.component('auth', auth);
Vue.component('sidebar', sidebar);
Vue.component('webheader', webheader);
Vue.component('consultLeads', consultLeads);
Vue.component('liveLeads', liveLeads);
Vue.component('downloadLeads', downloadLeads);
Vue.component('showFilter', showFilter);
Vue.component('proLeads', proLeads);




const _App = new Vue({
  store,
  onShow (options) {
    let userInfo = globalData.get("userInfo");
    store.commit('set_useriNfo',userInfo);
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h(Block, this.$slots.default)
  }
})
// App(_App);
export default _App;
