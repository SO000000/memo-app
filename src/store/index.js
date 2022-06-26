import { createStore } from 'vuex'

export default createStore({
  state: {
    memo_id:[],
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    }
  },
  mutations: {
    save(state, newMemo) {
      newMemo.id = ++state.memo_id
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
