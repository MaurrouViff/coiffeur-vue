import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Liste des composants
import Accueil from './components/pages/Accueil.vue';


const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
