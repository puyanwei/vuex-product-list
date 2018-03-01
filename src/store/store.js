import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Sylvanas", price: 1600 },
      { name: "Reno Jackson", price: 1000 },
      { name: "Edwin VanCleef", price: 850 },
      { name: "Elise Starseeker", price: 1200 }
    ]
  },
  getters: {
    saleProducts: state => {
      var salePrice = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return salePrice;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  }
});
