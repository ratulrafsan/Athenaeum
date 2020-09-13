import Vue from 'vue';
import VueRouter from 'vue-router';
import namedRoutes from "./namedRoutes";

import landing from '../views/Landing';
import home from '../views/Home'

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
        props: true,
        component: () => import('../views/AddBook')
    },

    {
        path: namedRoutes.manageUser,
        name: 'manage_user',
        component: () => import('../views/Users')
    },

    {
        path: namedRoutes.addUser,
        name: 'add_user',
        props: true,
        component: () => import('../views/AddUser')
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
