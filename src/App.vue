<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import productListOne from "./components/productListOne.vue";
import productListTwo from "./components/productListTwo.vue";

export default {
  components: {
    "product-list-one": productListOne,
    "product-list-two": productListTwo
  },
  name: "app",
  data() {
    return {
      products: [
        { name: "Sylvanas", price: 1600 },
        { name: "Reno Jackson", price: 1000 },
        { name: "Edwin VanCleef", price: 850 },
        { name: "Elise Starseeker", price: 1200 }
      ]
    };
  }
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
