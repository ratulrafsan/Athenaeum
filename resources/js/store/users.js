import mutationTypes from "./mutation-types";
import http from "../http/axios";
import {V1API} from "../http/APIPath";

export default {
    namespaced:true,
    state : {
        users: undefined,
        fetchProcessing: false,
        fetchError: false,

        deleteProcessing: false,
        deleteError: false,
        deleteSuccess: false,

        editProcessing: false,
        editError: false,
        editSuccess: false,

        addUserProcessing: false,
        addUserError: false,
        addUserSuccess: false,
    },
    mutations: {
        [mutationTypes.USERS_SET_DATA] (state, payload) {
            state.users = payload;
        },

        [mutationTypes.USERS_FETCH_PROCESSING] (state, isProcessing) {
            state.fetchProcessing = isProcessing;
        },

        [mutationTypes.USERS_FETCH_ERROR] (state, hasError) {
            state.fetchError = hasError;
        },

        [mutationTypes.USERS_DELETE_PROCESSING] (state, isProcessing) {
            state.deleteProcessing = isProcessing;
        },

        [mutationTypes.USERS_DELETE_ERROR] (state, hasError) {
            state.deleteError = hasError;
        },

        [mutationTypes.USERS_DELETE_SUCCESS] (state, success){
            state.deleteSuccess = success;
        },

        [mutationTypes.USERS_EDIT_PROCESSING] (state, isProcessing) {
            state.editProcessing = isProcessing;
        },

        [mutationTypes.USERS_EDIT_ERROR] (state, hasError) {
            state.editError = hasError;
        },

        [mutationTypes.USERS_DELETE_SUCCESS] (state, success) {
            state.editSuccess = success;
        },

        [mutationTypes.USERS_ADD_PROCESSING] (state, isProcessing) {
            state.addUserProcessing = isProcessing;
        },

        [mutationTypes.USERS_ADD_ERROR] (state, hasError) {
            state.addUserError = hasError;
        },

        [mutationTypes.USERS_ADD_SUCCESS] (state, success) {
            state.addUserSuccess = success;
        }
    },
    actions: {
        async getUsers({commit}) {
            commit(mutationTypes.USERS_FETCH_PROCESSING, true);
            commit(mutationTypes.USERS_FETCH_ERROR, false);

            try{
                let response = await http.get(V1API.users);

                commit(mutationTypes.USERS_SET_DATA, response.data);
            }catch(error){
                console.error(error);
                commit(mutationTypes.USERS_FETCH_ERROR, true);
            }finally {
                commit(mutationTypes.USERS_FETCH_PROCESSING, false);
            }
        },

        async deleteUser({commit, dispatch}, id) {
            commit(mutationTypes.USERS_DELETE_PROCESSING, true);
            commit(mutationTypes.USERS_DELETE_ERROR, false);
            try{
                let response = await http.delete(V1API.users, {
                    data: {
                        'id' : id
                    }
                });

                dispatch('getUsers');

                commit(mutationTypes.USERS_DELETE_SUCCESS, true);
            } catch (error) {
                console.error(error);
                commit(mutationTypes.USERS_DELETE_ERROR, true);
            } finally {
                commit(mutationTypes.USERS_DELETE_PROCESSING, false);
            }
        },

        async updateUser({commit}, payload) {
            commit(mutationTypes.USERS_EDIT_PROCESSING, true);
            commit(mutationTypes.USERS_EDIT_ERROR, false);
            try{
                let response = await http.put(V1API.users, payload);
                commit(mutationTypes.USERS_EDIT_SUCCESS, true);
            }catch (e) {
                console.error(e);
                commit(mutationTypes.USERS_EDIT_ERROR, true);
            }finally {
                commit(mutationTypes.USERS_EDIT_PROCESSING, false);
            }
        },

        async addUser({commit}, payload) {
            commit(mutationTypes.USERS_ADD_PROCESSING, true);
            commit(mutationTypes.USERS_ADD_ERROR, false);

            try{
                let response = await http.post(V1API.add_user, payload);
                commit(mutationTypes.USERS_ADD_SUCCESS, true);
            }catch (e) {
                console.error(e);
                commit(mutationTypes.USERS_ADD_ERROR, true);
            }finally {
                commit(mutationTypes.USERS_ADD_PROCESSING, false);
            }
        }
    }
}
