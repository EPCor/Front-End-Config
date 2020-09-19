export default [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('~/pages/Home.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('~/pages/About.vue'),
  },
];
