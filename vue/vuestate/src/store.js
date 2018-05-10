import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'https://google.com',
      'https://khanacademy.com',
      'https://youtube.com'
    ]
  },
  getters: {
    countLinks (state) {
      return state.links.length
    }
  }
  ,
  mutations: {
    ADD_LINK (state, link) {
      state.links.push(link)
    },
    REMOVE_LINK (state, link) {
      state.links.splice(link, 1)
    },
    REMOVE_ALL_LINKS (state) {
      state.links = []
    }
  },
  actions: {
    removeLink (context, link) {
      context.commit('REMOVE_LINK', link)
    },
    removeAllLinks ({commit}) {
      return new Promise ((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL_LINKS')
          resolve()
        }, 3000)
      })
    }
  }
})
