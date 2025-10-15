<template>
  <section class="hero" id="accueil">
    <h1>Ma veille</h1>
    <p>Voici les articles que j'ai consultés</p>
    <p>pour constituer ma veille technologique</p>
  </section>

  <section class="carousel-section">
    <h2>Mes Articles De Veille</h2>
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div class="carousel-item active">
          <img src="../assets/images/veille.png" alt="Projet 1" />
          <h3>Conseils pour développeur junior</h3>
          <p>
            L'article donne des conseils aux développeurs juniors pour débuter
            leur carrière. Il recommande de suivre des formations sérieuses,
            montrer ses projets, être honnête et apprendre Git. Il faut
            progresser en continu et ignorer les critiques inutiles.
          </p>
          <a
            href="https://www.jesuisundev.com/conseils-pour-developpeur-junior/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>

        <div class="carousel-item">
          <img src="../assets/images/veille2.png" alt="Projet 2" />
          <h3>Optimiser son SEO avec l'IA</h3>
          <p>
            L'intelligence artificielle aide à optimiser le contenu, choisir des
            mots-clés et améliorer le SEO. Une combinaison IA + humain est
            idéale pour de meilleurs résultats.
          </p>
          <a
            href="https://www.tricorn.fr/2024/01/04/optimiser-son-seo-avec-lintelligence-artificielle-ia/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>

        <div class="carousel-item">
          <img src="../assets/images/veille.png" alt="Projet 3" />
          <h3>Pourquoi les développeurs codent mal</h3>
          <p>
            L'auteur raconte une erreur de gestion de projet qui a causé
            l'échec. Il souligne l'importance de dire "non" aux délais
            irréalistes pour préserver la qualité du code.
          </p>
          <a
            href="https://www.jesuisundev.com/pourquoi-les-developpeureuses-codent-avec-le-cul/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>

        <div class="carousel-item">
          <img src="../assets/images/veille2.png" alt="Projet 4" />
          <h3>4 idées reçues sur les sites web</h3>
          <p>
            Contrairement aux idées reçues, un site web ne génère pas de clients
            sans SEO ou pub. Il doit être ergonomique, bien structuré et utile.
          </p>
          <a
            href="https://www.tricorn.fr/2023/01/24/4-idees-recues-sur-les-sites-web/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>

        <div class="carousel-item">
          <img src="../assets/images/veille.png" alt="Projet 5" />
          <h3>Résoudre les problèmes en programmation</h3>
          <p>
            La méthode efficace : clarifier, planifier, appliquer, répéter.
            Découper les problèmes et pratiquer régulièrement est essentiel.
          </p>
          <a
            href="https://www.jesuisundev.com/resolution-de-problemes/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>

        <div class="carousel-item">
          <img src="../assets/images/veille2.png" alt="Projet 6" />
          <h3>Comment Google classe les sites web ?</h3>
          <p>
            Google classe selon : qualité du contenu, rapidité, originalité,
            backlinks et cohérence. Le référencement prend du temps, patience !
          </p>
          <a
            href="https://www.tricorn.fr/2023/01/21/comment-google-classe-les-sites-web/"
            class="carousel-link"
            target="_blank"
            >Voir l'article</a
          >
        </div>
      </div>

      <button class="carousel-button prev" @click="moveSlide(-1)">
        &#10094;
      </button>
      <button class="carousel-button next" @click="moveSlide(1)">
        &#10095;
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const carousel = ref(null);
let currentIndex = 0;

const moveSlide = (direction) => {
  const items = carousel.value.children;
  const totalItems = items.length;

  // Retire la classe active de l'actuel
  items[currentIndex].classList.remove("active");

  // Calcule l'index suivant
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Ajoute la classe active au nouveau
  items[currentIndex].classList.add("active");

  // Translate la slide
  carousel.value.style.transform = `translateX(-${currentIndex * 100}%)`;
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  background-color: #f8e7e8;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #f8e7e8, #ffe6e9);
  background-size: 200% 200%;
  animation: gradientBG 8s ease infinite;
}

header {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
}

.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 0 20px;
  margin-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 3.5rem;
  color: #ff6f91;
  animation: glowText 2s ease-in-out infinite alternate;
  position: relative;
}

.hero h1 span {
  display: inline-block;
  animation: floating 0.3s ease infinite;
}

.hero p {
  font-size: 1.5rem;
  color: #333;
  max-width: 700px;
  margin: 20px 0;
  line-height: 1.6;
  animation:
    typing 4s steps(40, end),
    blink-caret 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ff6f91;
}

.hero a {
  background-color: #ff6f91;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.2s ease;
}

.hero a:hover {
  background-color: #d96073;
}

.presentation,
.about {
  background-color: #fff;
  padding: 50px 20px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
}

.presentation h2,
.about h2 {
  font-size: 2.5rem;
  color: #ff6f91;
  margin-bottom: 30px;
}

.presentation p,
.about p {
  font-size: 1.2rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.card-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
}

.card {
  background-color: #fff;
  width: 300px;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
}

.card:hover {
  transform: translateY(-10px) rotateX(10deg) rotateY(10deg);
  transform-style: preserve-3d;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: pulse 2s ease-in-out infinite;
}

footer {
  background-color: #fff;
  padding: 20px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

footer p {
  color: #333;
}

/* Animations */
@keyframes glowText {
  from {
    text-shadow: 0 0 10px rgba(255, 111, 145, 0);
  }
  to {
    text-shadow:
      0 0 20px rgba(255, 111, 145, 0.5),
      0 0 30px rgba(255, 111, 145, 0.3);
  }
}

@keyframes floating {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ff6f91;
  }
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 400px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .hero p,
  .presentation p,
  .about p {
    font-size: 1rem;
  }
  .card {
    width: 90%;
  }
}
.carousel-section {
  text-align: center;
  background-color: #f8e7e8;
  padding: 50px 20px;
}

.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-item img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.carousel-link {
  background-color: #ff6f91;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.carousel-link:hover {
  background-color: #d96073;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
