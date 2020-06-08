export default {
    state: {
       token: ''
    },
    getters: {

    },
    mutations:{
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        setToken({ commit } , newData) {
            commit('setToken', newData);
        },
    }
}