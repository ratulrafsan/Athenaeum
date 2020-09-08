import Vue from 'vue';
import VueRouter from 'vue-router';
import namedRoutes from "./namedRoutes";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import('../views/Landing')
    },

    {
        path: namedRoutes.login,
        name: 'login',
        component: () => import('../views/Login')
    },

    {
        path: namedRoutes.contact,
        name: 'contact',
        component: () => import('../views/Contact')
    },

    {
        path: namedRoutes.home,
        name: 'home',
        component: () => import('../views/Home')

    },

    {
        path: namedRoutes.addBook,
        name: 'add_book',
        component: () => import('../views/AddBook')
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
