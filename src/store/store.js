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
    reducePrice: state => {
      state.products.forEach(product => {
        product.price -= 1;
      });
    }
  },
  actions: {
    reducePrice: context => {
      setTimeout(function() {
        context.commit("reducePrice");
      }, 2000);
    }
  }
});
