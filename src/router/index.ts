import Form from '../views/Form.vue';
import ThankYou from '../views/ThankYou.vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
  {
    path: '/',
    component: Form,
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
