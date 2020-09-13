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
    actions: {}
}
