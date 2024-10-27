import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import "../src/css/output.css";

// Liste des composants
import Accueil from './pages/Accueil.vue';


// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
