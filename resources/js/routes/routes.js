import Vue from 'vue';
import VueRouter from 'vue-router';
import namedRoutes from "./namedRoutes";

import landing from '../views/Landing';
import home from '../views/Home'
import constants from "../constants";

Vue.use(VueRouter);

const routes = [
    {
        path: '/landing',
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
        component: () => import('../views/Home'),
        meta: {
            auth: true
        }
    },

    {
        path: namedRoutes.addBook,
        name: 'add_book',
        props: true,
        component: () => import('../views/AddBook'),
        meta: {
            auth: true
        }
    },

    {
        path: namedRoutes.manageUser,
        name: 'manage_user',
        component: () => import('../views/Users'),
        meta: {
            auth: true
        }
    },

    {
        path: namedRoutes.addUser,
        name: 'add_user',
        props: true,
        component: () => import('../views/AddUser'),
        meta: {
            auth: true
        }
    },

    {
        path: '*',
        name: 'not_found',
        component: () => import('../views/Landing')
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record=> record.meta.auth)) {
        // Check if user has token & user object
        let token = localStorage.getItem(constants.LocalStorageKeys.TOKEN);
        let user = localStorage.getItem(constants.LocalStorageKeys.USER);
        if(token && user ) {
            return next();
        }else{
            return next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            })
        }
    }else {
        next();
    }
});

export default router;
