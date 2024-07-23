import { createApp } from 'vue'
import App from './App.vue'
import { router } from './providers/router';
import { createPinia } from 'pinia';

const app = createApp(App)
    .use(createPinia())
    .use(router)

export default app;