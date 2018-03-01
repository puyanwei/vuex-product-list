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
    return {};
  }
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
