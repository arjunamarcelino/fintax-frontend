import { createRouter, createWebHistory } from 'vue-router';
import ThankYou from '../views/ThankYou.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
  {
    path: '/',
    component: ThankYou,
  },
  {
    path: '/thankyou',
    component: ThankYou,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
