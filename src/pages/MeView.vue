<template>
  <div class="hero">
    <h1>Présentation</h1>
    <div class="button-container">
      <button @click="showSection('moi-section')">À propos de moi</button>
      <button @click="showSection('entreprise-section')">
        À propos de RPI Menuiserie
      </button>
    </div>
  </div>

  <!-- Section À propos de moi -->
  <div
    id="moi-section"
    class="sections"
    :class="{ active: activeSection === 'moi-section' }"
  >
    <!-- Parcours scolaire -->
    <div id="parcours" class="section">
      <h2>Mon Parcours Scolaire</h2>
      <p>
        Voici un aperçu de mon parcours scolaire et des étapes clés de ma
        formation.
      </p>

      <div class="timeline-wrapper">
        <ul class="timeline">
          <li>
            <div class="date">2019 - 2022</div>
            <div class="desc">
              Bac professionnel en optique lunetterie –
              <strong>Admise mention bien</strong><br />
              • 2021 : Formation technico-commerciale chez Atol Paris<br />
              • 2021 : Médaille d'argent au concours du Meilleur Apprenti de
              France<br />
              • 2022 : Médaille de bronze au concours du Meilleur Apprenti de
              France
            </div>
          </li>
          <li>
            <div class="date">2023 - 2025</div>
            <div class="desc">
              BTS SIO – Option SLAM au Campus Ermiage– <strong>Admise</strong>
            </div>
          </li>
          <li>
            <div class="date">2025 - 2026</div>
            <div class="desc">
              Bachelor Développeur Web à MyDigitalSchool–
              <strong>En Cour</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- CV -->
    <div id="cv" class="section">
      <h2>Mon CV</h2>
      <p>
        Découvrez mon parcours professionnel et mes compétences. Vous pouvez
        télécharger mon CV complet ou le consulter ci-dessous.
      </p>

      <div class="cv-content">
        <div class="cv-preview">
          <a href="../assets/images/cvmanonpinto_filigrane.pdf" target="_blank">
            <img
              src="../assets/images/cv.png"
              alt="Aperçu de mon CV"
              class="cv-img"
            />
          </a>
        </div>
        <div class="cv-actions">
          <a href="../assets/images/cvmanonpinto.pdf" target="_blank">
            <button class="btn cv-btn">Télécharger Mon CV</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Section RPI Menuiserie -->
  <div
    id="entreprise-section"
    class="sections"
    :class="{ active: activeSection === 'entreprise-section' }"
  >
    <div class="section entreprise">
      <h2 class="section-title">RPI Menuiserie : Artisanat & Innovation</h2>

      <div class="entreprise-content">
        <p>
          <strong>RPI Menuiserie</strong> est une entreprise dynamique implantée
          en <strong>Nouvelle-Aquitaine</strong>, spécialisée dans la
          <em>fabrication,</em> de menuiseries intérieures et extérieures.
        </p>

        <p>
          Elle accompagne aussi bien les <strong>particuliers</strong> que les
          <strong>professionnels</strong> dans leurs projets sur mesure :
          <span class="services">fenêtres, portes, volets</span>, etc.
        </p>

        <p>
          Reconnue pour son
          <strong>savoir-faire, la qualité de ses matériaux </strong>, RPI
          Menuiserie allie avec justesse <em>tradition</em> et
          <em>innovation</em>.
        </p>

        <p>
          Grâce à une équipe expérimentée et passionnée, l’entreprise propose
          des <strong>prestations personnalisées</strong>, adaptées à chaque
          besoin, avec une attention particulière portée aux finitions.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeSection = ref("moi-section");

function showSection(sectionId) {
  activeSection.value = sectionId;
}
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

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.button-container button {
  background-color: #ff6f91;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 10px;
}

.button-container button:hover {
  background-color: #d96073;
}

.sections {
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;
  padding: 0 20px;
}

.sections.active {
  display: flex;
}

.section {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  margin-bottom: 50px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.timeline-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 30px auto 0;
  padding-left: 20px;
  position: relative;
}

.timeline {
  list-style: none;
  padding-left: 0;
  border-left: 3px solid #ff6f91;
  margin: 0;
}

.timeline li {
  position: relative;
  padding: 15px 20px;
  margin-bottom: 10px;
  background: #fff0f3;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.timeline li:hover {
  transform: scale(1.02);
}

.timeline li::before {
  content: "";
  position: absolute;
  top: 20px;
  left: -11px;
  width: 14px;
  height: 14px;
  background-color: #ff6f91;
  border: 3px solid #fff;
  border-radius: 50%;
  z-index: 1;
}

.timeline .date {
  font-weight: bold;
  color: #d96073;
  margin-bottom: 5px;
}

.timeline .desc {
  font-size: 1rem;
  color: #333;
}

#cv {
  background-color: white; /* Couleur de fond douce */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

#cv h2 {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

#cv p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 20px;
}

/* Contenu du CV */
.cv-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Prévisualisation du CV */
.cv-preview {
  flex: 1;
  min-width: 200px;
  text-align: center;
  margin-right: 20px;
}

.cv-img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.cv-img:hover {
  transform: scale(1.05); /* Effet de zoom au survol */
}

/* Style des boutons */
.cv-actions {
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cv-btn {
  background-color: #ff6f91;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.cv-btn:hover {
  background-color: #d96073; /* Couleur au survol */
  cursor: pointer;
}

.entreprise .section-title {
  font-size: 2.5rem;
  color: #ff6f91;
  text-shadow: 0 2px 4px rgba(255, 111, 145, 0.3);
  margin-bottom: 30px;
  position: relative;
}

.entreprise .section-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background-color: #ff6f91;
  margin: 10px auto 0;
  border-radius: 2px;
}

.entreprise-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: left;
  max-width: 800px;
}

.entreprise-content p {
  margin-bottom: 20px;
}

.entreprise-content strong {
  color: #d96073;
}

.entreprise-content em {
  font-style: italic;
  color: #888;
}

.entreprise-content .services {
  display: inline-block;
  background-color: #fff0f3;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 500;
  color: #d96073;
}

/* Animations */
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

@keyframes glowText {
  0% {
    text-shadow:
      0 0 10px #ff6f91,
      0 0 20px #ff6f91;
  }
  100% {
    text-shadow:
      0 0 20px #ff6f91,
      0 0 30px #ff6f91;
  }
}
</style>
