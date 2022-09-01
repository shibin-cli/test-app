import { defineStore } from 'pinia'

const useUserStore = defineStore('editor', {
  state: () => ({
    isLogin: false,
    username: ''
  }),
  actions: {
    increment () {

    }
  }
})

export default useUserStore
