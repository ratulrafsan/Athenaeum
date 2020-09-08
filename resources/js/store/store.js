import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import moduleUser from './user';
import moduleBook from './books';
import moduleCategory from './category';
import moduleAuthor from './authors';
import moduleAuth from './auth';

export default new Vuex.Store({
    getters: {},
    mutations: {},
    state: {},
    actions: {},
    modules: {
        auth: moduleAuth,
        user: moduleUser,
        book: moduleBook,
        category: moduleCategory,
        author: moduleAuthor
    },

    strict: process.env.NODE_ENV !== 'production'
})
