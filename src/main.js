import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Liste des composants
import Accueil from './components/pages/Accueil.vue';
import Contact from './components/pages/Contact.vue';
import Horraire from './components/pages/Horraire.vue';
import Propos from './components/pages/Propos.vue';
import Personnel from './components/pages/Personnel.vue';

// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/contact', component: Contact },
    { path: '/horraire', component: Horraire },
    { path: '/propos', component: Propos },
    { path: '/personnel', component: Personnel }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
