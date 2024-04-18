// importations
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import tvShowsDetails from '../views/tvShowsDetails.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;