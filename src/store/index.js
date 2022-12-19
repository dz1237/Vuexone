import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    count:0
  },
  getters:{
    addCount(state){
      return state.count;
    }
  },
  mutations:{
    add(state,payload){
      state.count += payload;
    },
    sub(state,payload){
      state.count -= payload;
    }
  },
  actions:{
    add(context,payload){
      context.commit("add",payload);
    },
    sub(context,payload){
      context.commit("sub",payload);
    }
  }


})