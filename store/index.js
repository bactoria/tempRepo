import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    posts: [],
    categories: [],
    post: []
  },
  mutations: {
    add (state, payload) {
      state.posts = payload;
    },
    addCategories (state, payload) {
      state.categories = payload;
    },
    addPost (state, payload) {
      state.post = payload;
    },

  },

  getters: {
    categories (state) {
      return state.categories
    },
    post (state) {
      return state.post
    }
  }
})

export default store
