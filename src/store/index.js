import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import app from './module/app'
Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations:{

    },
    modules: {
        user,
        app
    },
    plugins: [
        createPersistedState({
            reducer(val){
                return{
                    user: val.user,
                    app: val.app
                }
            }
        })
    ]
})