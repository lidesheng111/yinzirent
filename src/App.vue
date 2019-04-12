<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
var BaaS = require("minapp-sdk");
import Header from './template/header.vue';

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
    };
  },

  mounted() {
  },

  methods: {
  }
};
</script>

<style>
</style>
