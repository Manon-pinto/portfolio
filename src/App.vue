<script setup>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<style scoped></style>
