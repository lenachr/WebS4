// importations
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import tvShowsDetails from '../views/tvShowsDetails.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tvShowsDetails/:id',
    name: 'tvShowsDetails',
    component: tvShowsDetails,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;