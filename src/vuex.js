import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        counter: 4
    },
    mutations: {
        decrement: state => state.counter--,
        increment: state => state.counter++
    }
})

export { store }