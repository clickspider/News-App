import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersist from "vuex-persist";
import { URL, URL_IP, KEY_NEWS } from "../data/config.js";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "store"
});

export const store = new Vuex.Store({
  strict: true,
  plugins: [vuexLocalStorage.plugin],
  state: {
    // Use this to store your data
    articles: [],
    isRTL: false
  },

  mutations: {
    // Use this to change the data
    gotData(state, args) {
      state.articles = args[0];
      args[1] === "IL" ? (state.isRTL = true) : (state.isRTL = false);
    }
  },

  actions: {
    // Use this to call the change/mutation^
    async getData({ commit }) {
      try {
        const GET_LOCATION = await axios.get(URL_IP);
        const COUNTRY_CODE = GET_LOCATION.data.country;

        const GET_NEWS = await axios.get(
          `${URL}${await COUNTRY_CODE}${KEY_NEWS}`
        );
        const ARTICLES = GET_NEWS.data.articles;

        commit("gotData", [ARTICLES, COUNTRY_CODE]);
      } catch (err) {
        commit("gotData", err);
      }
    }
  },

  getters: {
    // Use this to get stored data and change it
    articles: state => {
      return state.articles;
    },

    isRTL: state => {
      return state.isRTL;
    }
  }
});
