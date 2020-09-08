import Vue from 'vue';
import Vuex from 'vuex';
import moduleTypes from './module-types';

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
        [moduleTypes.AUTH]: moduleAuth,
        user: moduleUser,
        [moduleTypes.BOOK]: moduleBook,
        [moduleTypes.CATEGORY]: moduleCategory,
        [moduleTypes.AUTHOR]: moduleAuthor
    },

    strict: process.env.NODE_ENV !== 'production'
})
