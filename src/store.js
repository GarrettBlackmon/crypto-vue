import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cryptos: [
      'BTC',
      'ETH',
      'XRP'
    ],
    fiats: [
      'USD',
      'EUR',
      'CAD']
  },
  mutations: {},
  actions: {},


});
