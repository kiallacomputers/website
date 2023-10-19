import { createApp } from 'vue'
import './style.css'
import './lightbox.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Services from './pages/Services.vue';
import Contact from './pages/Contact.vue';
import Services2 from "./pages/Services2.vue";
import Specials from "./pages/Specials.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
    { path: '/services2', component: Services2 },
    { path: '/specials', component: Specials}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
