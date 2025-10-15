<script setup>
import NavBar from "./components/Navbar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<style scoped></style>
