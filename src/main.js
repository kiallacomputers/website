import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue';
import Services from './pages/Services.vue';
import Products from './pages/Products.vue';
import Contact from './pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/products', component: Products },
    { path: '/contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
