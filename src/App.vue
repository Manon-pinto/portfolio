<script setup>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
