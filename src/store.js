import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cryptos: [
      'BTC',
      'ETH',
      'XRP',
      'BCH',
      'EOS',
      'ADA',
      'LTC',
      'XLM',
      'IOTA',
      'NEO'
    ],
    fiats: [
      'USD',
      'EUR',
      'GHS',
      'ZAR',
      'NGN']
  },
  mutations: {},
  actions: {},


});
