import { defineStore } from 'pinia'

export interface TemplateProps{
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}
const useTemplateStore = defineStore('template', {
  state: () => ({
    id: 0,
    title: '',
    coverImg: '',
    author: '',
    copiedCount: 0
  }),
  actions: {
  }
})

export default useTemplateStore
