import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import Me from "./pages/Me.vue";
import Projets from "./pages/Projets.vue";
import Competences from "./pages/Competences.vue";
import Technique from "./pages/Technique.vue";
import Contact from "./pages/Contact.vue";
import Veille from "./pages/Veilles.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/me", component: Me },
  { path: "/Projets", component: Projets },
  { path: "/Contact", component: Contact },
  { path: "/Technique", component: Technique },
  { path: "/Veille", component: Veille },
  { path: "/Competences", component: Competences }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
