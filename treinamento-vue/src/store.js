import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        logged: false,
        authToken: "",
        message: {
            text: "",
            type: ""
        },
    },
    mutations:{
        setLogged(state,payload){
            state.logged = payload;
        },
        setAuthToken(state, payload){
            state.authToken = payload;
        },
        showErrorMessage(state, payload){
            state.message = {
                text: payload,
                type: 'ERROR'
            }
        },
        showSuccessMessage(state, payload){
            state.message = {
                text: payload,
                type: 'SUCCESS'
            }
        },
    },
});

