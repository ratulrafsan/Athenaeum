import mutationTypes from './mutation-types';
import getterTypes from './getter-types';
import axios from '../http/axios';
import {V1API} from  '../http/APIPath';
import router from "../routes/routes";
import namedRoutes from "../routes/namedRoutes";
import {fromHex} from "vuetify/lib/components/VColorPicker/util";

export default {
    namespaced: true,
    state: {
        books: undefined,
        processing: false,
        hasError: false,
        query: undefined,

        notificationTimeout: 10000,

        newBookProcessing: false,
        newBookError: false,
        newBookSuccess: false,

        updateBookProcessing: false,
        updateBookError: false,
        updateBookSuccess: false,

        deleteBookProcessing: false,
        deleteBookError: false,
        deleteBookSuccess: false,

        importProcessing: false,
        importError: false,
        importSuccess: false,
    },

    getters: {
        noBooks: state => {
            /// If books is undefined return false
            if(state.books === undefined) return false;
            /// otherwise check for the book length
            return state.books.length === 0;
        },

        shouldDisplayResult: state => {
            return state.books !== undefined;
        },

        books: state => {
            return state.books ? state.books: [];
        },

        count: state => {
            return state.books ? state.books.length : 0;
        },

        [getterTypes.BOOK_NEW_PROCESSING] : state => {
            return state.newBookProcessing;
        },

        [getterTypes.BOOK_NEW_SUCCESS] : state => {
            return state.newBookSuccess;
        },

        [getterTypes.BOOK_UPDATE_PROCESSING] : state => {
            return state.updateBookProcessing;
        },

        [getterTypes.BOOK_UPDATE_SUCCESS] : state => {
            return state.updateBookSuccess;
        },

        [getterTypes.BOOK_DELETE_PROCESSING] : state => {
            return state.deleteBookProcessing;
        },

        [getterTypes.BOOK_DELETE_SUCCESS] : state => {
            return state.deleteBookSuccess;
        },

        [getterTypes.BOOK_DELETE_ERROR] : state => {
            return state.deleteBookError;
        },

        [getterTypes.BOOK_UPDATE_ERROR] : state => {
            return state.updateBookError;
        },

        [getterTypes.BOOK_NEW_ERROR] : state => {
            return state.newBookError;
        }
    },

    mutations: {
        [mutationTypes.BOOK_SET_DATA] (state, payload) {
            state.books = payload;
        },

        [mutationTypes.BOOK_PROCESSING] (state, isProcessing) {
            state.processing = isProcessing;
        },

        [mutationTypes.BOOK_ERROR] (state, hasError) {
            state.hasError = hasError;
        },

        [mutationTypes.BOOK_SET_QUERY] (state, query) {
            state.query = query;
        },

        [mutationTypes.BOOK_NEW_ERROR] (state, hasError) {
            state.newBookError = hasError;
        },

        [mutationTypes.BOOK_NEW_PROCESSING] (state, isProcessing) {
            state.newBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_UPDATE_PROCESSING] (state, isProcessing) {
            state.updateBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_UPDATE_ERROR] (state, hasError) {
            state.updateBookError = hasError;
        },

        [mutationTypes.BOOK_DELETE_PROCESSING] (state, isProcessing) {
            state.deleteBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_DELETE_ERROR] (state, hasError) {
            state.deleteBookError = hasError;
        },

        [mutationTypes.BOOK_UPDATE_SUCCESS] (state, success) {
            state.updateBookSuccess = success;
        },

        [mutationTypes.BOOK_NEW_SUCCESS] (state, success) {
            state.newBookSuccess = success;
        },

        [mutationTypes.BOOK_DELETE_SUCCESS] (state, success) {
            state.deleteBookSuccess = success;
        },

        [mutationTypes.BOOK_IMPORT_SUCCESS] (state ,success) {
            state.importSuccess = success;
        },

        [mutationTypes.BOOK_IMPORT_PROCESSING] (state, isProcessing) {
            state.importProcessing = isProcessing;
        },

        [mutationTypes.BOOK_IMPORT_ERROR] (state, hasError) {
            state.importError = hasError;
        }
    },
    actions: {
        closeSuccessSnackbar({commit}) {
            commit(mutationTypes.BOOK_NEW_SUCCESS, false);
            commit(mutationTypes.BOOK_UPDATE_SUCCESS, false);
            commit(mutationTypes.BOOK_IMPORT_SUCCESS, false);
        },
        closeErrorSnackbar({commit}){
            commit(mutationTypes.BOOK_NEW_ERROR, false);
            commit(mutationTypes.BOOK_UPDATE_ERROR, false);
            commit(mutationTypes.BOOK_IMPORT_ERROR, false);
        },
        async importBook({commit}, payload) {
            commit(mutationTypes.BOOK_IMPORT_ERROR, false);
            commit(mutationTypes.BOOK_IMPORT_PROCESSING, true);

            try{
                let formData = new FormData();
                formData.append("excel_file", payload);

                let response = await axios.post(V1API.import_book, formData, {headers: {
                        "Content-Type": "multipart/form-data"
                    }});

                commit(mutationTypes.BOOK_IMPORT_SUCCESS, true);
            }catch (e) {
                console.error(e);
                commit(mutationTypes.BOOK_IMPORT_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_IMPORT_PROCESSING, false);
            }
        },

        async fetchBooks({commit, state}, payload) {
            commit(mutationTypes.BOOK_ERROR, false);
            commit(mutationTypes.BOOK_PROCESSING, true);

            // if payload is empty then fetch the query from state
            if(!payload) {
                payload = state.query;
            }

            try{
                let response = await axios.post(V1API.search_books, {
                    term: payload
                });

                commit(mutationTypes.BOOK_SET_DATA, response.data);
            }catch (error) {
                console.error(error);
                commit(mutationTypes.BOOK_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_PROCESSING, false);
            }
        },

        async exportBook({commit}) {
            try{
                let response = await axios.get(V1API.export_book, {responseType: 'arraybuffer'});
                let fileName = response.headers["content-disposition"].split("filename=")[1];
                let blob = new Blob([response.data], {type:'application/*'})
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(blob)
                link.download = fileName;
                link.click();
            }catch (e) {
                console.error(e);
            }
        },

        async addBook({commit,state}, payload) {
            commit(mutationTypes.BOOK_NEW_PROCESSING, true);
            commit(mutationTypes.BOOK_NEW_ERROR, false);
            commit(mutationTypes.BOOK_NEW_SUCCESS, false);

            try{
                let response = await axios.post(V1API.book, {
                    title: payload.title,
                    isbn: payload.isbn,
                    author: payload.author,
                    category: payload.category,
                    language: payload.language,
                    publisher: payload.publisher,
                    location: payload.location
                });

                commit(mutationTypes.BOOK_NEW_SUCCESS, true);
                console.log(response.data);
                // setTimeout(commit(mutationTypes.BOOK_NEW_SUCCESS, false), state.notificationTimeout);
            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_NEW_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_NEW_PROCESSING, false);
            }
        },

        async updateBook({commit, dispatch, state}, payload) {
            commit(mutationTypes.BOOK_UPDATE_PROCESSING, true);
            commit(mutationTypes.BOOK_UPDATE_ERROR, false);
            commit(mutationTypes.BOOK_UPDATE_SUCCESS, false);

            try{
                let response = await axios.put(V1API.book, {
                    id: payload.id,
                    title: payload.title,
                    isbn: payload.isbn,
                    author: payload.author,
                    category: payload.category,
                    language: payload.language,
                    publisher: payload.publisher,
                    location: payload.location
                });

                commit(mutationTypes.BOOK_UPDATE_SUCCESS, true);
                // setTimeout(commit(mutationTypes.BOOK_UPDATE_SUCCESS, false), state.notificationTimeout);
                dispatch('fetchBooks');
                router.push(namedRoutes.home).catch(e=>console.log(e));
            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_UPDATE_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_UPDATE_PROCESSING, false);
            }
        },
        async deleteBook({commit, dispatch, state}, payload) {
            commit(mutationTypes.BOOK_DELETE_PROCESSING, true);
            commit(mutationTypes.BOOK_DELETE_ERROR, false);
            commit(mutationTypes.BOOK_DELETE_SUCCESS, false);
            try{
                let response = await axios.delete(V1API.book, {
                    data: {
                        id: payload.id
                    }
                });

                commit(mutationTypes.BOOK_DELETE_SUCCESS,true);
                setTimeout(commit(mutationTypes.BOOK_DELETE_SUCCESS, false), state.notificationTimeout);
                dispatch('fetchBooks');

            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_DELETE_ERROR,true);
            }finally {
                commit(mutationTypes.BOOK_DELETE_PROCESSING, false);
            }
        }
    }
}
