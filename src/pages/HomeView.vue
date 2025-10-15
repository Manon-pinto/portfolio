<template>
  <section class="hero" id="accueil">
    <h1>Bienvenue sur mon Portfolio</h1>
    <p>Je suis PINTO Manon, apprentie en Bachelor 3 Dévelloppeur web</p>
  </section>

  <section class="presentation" id="presentation">
    <h2>Découvrir le Bchelor 3 Dévelloppeur web</h2>
    <p>###############</p>
    <div class="card-container">
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/btsio.png" alt="Option SLAM" />
            <h3>Option SLAM</h3>
          </div>
          <div class="card-back">
            <p>
              La Spécialité Solutions Logicielles et Applications Métiers (SLAM)
              prépare les étudiants aux métiers du développement de logiciels et
              d’applications informatiques.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/btsio.png" alt="Option SISR" />
            <h3>Option SISR</h3>
          </div>
          <div class="card-back">
            <p>
              La Spécialité Solutions d'Infrastructure, Systèmes et Réseaux
              (SISR) forme des spécialistes en administration et maintenance des
              réseaux et systèmes informatiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <h2>À propos de moi</h2>
    <p>
      Je suis actuellement en BTS SIO SLAM et pour me former j'ai fréquenté le
      lycée Gustave Eiffel et le campus Ermitage (UFA 47). En alternance,
      actuellemnt chez Coaxis.
    </p>

    <div class="card-container">
      <!-- Carte : Moi -->
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/moi.png" alt="Ma Photo" />
            <h3>PINTO Manon</h3>
          </div>
          <div class="card-back">
            <p>
              Etudiante en Bchelor 3 Dévelloppeur web, en alternance chez RPI
              Menuiserie. J'ai commencé mon alternance en Aout 2025, et ma
              formation en septembre 2025.
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/coaxis.png" alt="Logo" />
            <h3>RPI Menuiserie</h3>
          </div>
          <div class="card-back">
            <p>######################################</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="../assets/images/ufa.png" alt="Campus Ermitage" />
            <h3>My Digital School</h3>
          </div>
          <div class="card-back">
            <p>Etablissement scolaire</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* styles/index.css */
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  background: linear-gradient(45deg, #f8e7e8, #ffe6e9);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: gradientBG 8s ease infinite;
  transition: background 0.3s ease-in-out;
}

/* Mode sombre */
.dark-mode {
  background: #222;
  color: #fff;
}

header {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0; /* Ajout pour s'assurer qu'elle s'étend sur toute la largeur */
  z-index: 1000;
  opacity: 1; /* Modification pour la rendre visible immédiatement */
  transform: translateY(
    0
  ); /* Suppression de l'animation qui pourrait la cacher */
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
  opacity: 1; /* Assurez-vous que la section soit visible */
  animation: fadeInUp 1s ease forwards 0s; /* Animation à 0s au lieu de 1s */
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero h1 {
  font-size: 3.5rem;
  color: #ff6f91;
  animation: glowText 2s ease-in-out infinite alternate;
}

.hero p {
  font-size: 1.5rem;
  max-width: 700px;
  color: #333;
  line-height: 1.6;
  animation:
    typing 4s steps(40, end),
    blink-caret 0.75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ff6f91;
}

.hero h1 span {
  display: inline-block;
  animation: floating 0.3s ease infinite;
}

.hero a {
  background-color: #ff6f91;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
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
  width: 300px;
  height: 200px;
  perspective: 1000px; /* Effet 3D */
  margin: 20px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-front {
  background-color: #fff;
}

.card-back {
  background-color: #f8e7e8;
  color: white;
  transform: rotateY(180deg);
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
.card h3 {
  margin: 0;
  color: #ff6f91;
}
.card p {
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

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
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
</style>
