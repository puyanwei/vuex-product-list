<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
export default {
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
</style>
