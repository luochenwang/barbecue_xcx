import Vue from 'vue'
import Vuex from 'vuex'
import { createCache } from "./libs/globalData";
const globalData = createCache();
Vue.use(Vuex)

const state = {
  authModel:false,
  userInfo:{},

  category:0,

  sidebarY:'',


  liveLeadsModel:false,
  downloadLeadsModel:false,
  consultLeadsModel:false,
  leadsItem:{},
}

const mutations = {
  set_leadsItem(state, obj) {
    state.leadsItem = obj || {};
  },
  set_liveLeadsModel(state, bo) {
    state.liveLeadsModel = bo || false;
  },
  set_downloadLeadsModel(state, bo) {
    state.downloadLeadsModel = bo || false;
  },
  set_consultLeadsModel(state, bo) {
    state.consultLeadsModel = bo || false;
  },
  set_useriNfo(state, obj) {
    state.userInfo = obj
  },
  set_category(state, val) {
    state.category = val
  },
  set_sidebarY(state, val) {
    state.sidebarY = val
  },
  set_authModel(state, bo = false){
    if(bo){
      state.userInfo = globalData.get("userInfo");
    }
    state.authModel = bo
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  }
}


const getters = {
  authModel(state) {
    return state.numbers
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
