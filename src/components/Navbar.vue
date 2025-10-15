<script setup>
defineOptions({
  name: 'AppNavbar'
})
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/" aria-label="Accueil">Accueil</router-link></li>
      <li>
        <router-link to="/me" aria-label="Présentation">
          Présentation
        </router-link>
      </li>
      <li><router-link to="/projets">Mes projets</router-link></li>
      <li>
        <router-link to="/technique" aria-label="Competentes Techniques">
          Compétences technique
        </router-link>
      </li>
      <li>
        <router-link to="/competences" aria-label="Mes compétences">
          Mes compétences
        </router-link>
      </li>
      <li>
        <router-link to="/veille" aria-label="Ma veille">Ma veille</router-link>
      </li>
      <li>
        <router-link to="/contact" aria-label="Contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #fff;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: #ff6f91;
  font-weight: bold;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

nav ul li a:hover {
  color: #d96073;
  transform: scale(1.1);
  text-shadow: 0 0 10px rgba(255, 111, 145, 0.5);
}

nav ul li a:active {
  animation: shake 0.3s ease;
}
</style>
