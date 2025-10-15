import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import Me from "./pages/MeView.vue";
import Projets from "./pages/ProjetsView.vue";
import Competences from "./pages/CompetencesView.vue";
import Technique from "./pages/TechniqueView.vue";
import Contact from "./pages/ContactView.vue";
import Veille from "./pages/VeillesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/me", component: Me },
  { path: "/Projets", component: Projets },
  { path: "/Contact", component: Contact },
  { path: "/Technique", component: Technique },
  { path: "/Veille", component: Veille },
  { path: "/Competences", component: Competences },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
