import { createStore } from 'vuex'

export default createStore({
  state: {
    memo_id: 1,
    memos: []
  },
  getters: {
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
