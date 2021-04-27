import Vue from 'vue';
import VueRouter from 'vue-router';
import PageBoards from './views/PageBoards.vue';

Vue.use(VueRouter);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/boards',
            name: 'boards',
            component: PageBoards,
            meta: { requiresAuth: true },
          },
    ]
})

export default router;