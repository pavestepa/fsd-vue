export const routes = [
    { path: '/', component: () => import("@pages/home") },
    { path: '/:pathMatch(.*)*', component: () => import("@pages/not-found") },
  ]