import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home-page.vue';
import Chat from '@/views/Chat-page.vue';
import APIWork from '@/views/APIWork-page.vue';
import AccountSettings from '@/views/AccountSettings-page.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/api-work',
    name: 'APIWork',
    component: APIWork,
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: AccountSettings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;