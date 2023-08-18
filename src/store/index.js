import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    name: "",
  },
  getters: {
    rName(state) {
      return state.name;
    },
  },
  mutations: {
    rName(state) {
      state.name = "khaled";
      console.log("yes Mutations");
    },
  },
  actions: {
    rName({ commit }) {
      commit("rName");
      console.log("yes actions");
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
