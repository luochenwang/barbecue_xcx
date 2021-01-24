import Vue from 'vue'
import Vuex from 'vuex'
import { createCache } from "./libs/globalData";
const globalData = createCache();
Vue.use(Vuex)

const state = {
  authModel:false,
  userInfo:{},

  category:0,
}

const mutations = {
  set_useriNfo(state, obj) {
    state.userInfo = obj
  },
  set_category(state, val) {
    state.category = val
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
