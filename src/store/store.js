import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
  }
});
