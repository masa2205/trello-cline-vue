import Vue from 'vue';
import Router from 'vue-router';
import PageBoards from './views/PageBoards.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/boards',
            name: 'boards',
            component: PageBoards,
            meta: { requiresAuth: false },
          }
    ]
})

export default router;