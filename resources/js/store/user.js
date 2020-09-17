export default {
    namespaced: true,
    state: {
        role: undefined
    },
    getters: {
      isAdmin : state => state.role === 1
    },
    mutations: {
        setRole (state ,role) {
            state.role = role;
        }
    },
    actions: {
        async setRole({commit}, payload) {
            commit('setRole', payload);
        }
    }
}
