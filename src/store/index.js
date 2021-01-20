import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [], // список постов
    search: '', // запрос на фильтрацию
  },
  mutations: {
    SET_POSTS(state, payload){
      state.posts = payload
    },
    SEARCH_CHANGED (state, payload) {
      state.search = payload
    },
  },
  actions: {
    async getPosts({commit}){
      try{
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
        commit('SET_POSTS', response.data)
      }catch(err){
        console.error(err)
      }
    },
  },
  getters: {
    posts: state => state.posts.filter(post =>
      post.title.toLowerCase().includes(state.search.toLowerCase())
    )
  }
})
