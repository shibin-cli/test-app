import { ComponentData, TextComponentProps } from '@/types/defaultProps'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

const components:ComponentData[] = []
const useEditorStore = defineStore('editor', {
  state: () => ({
    components,
    currentElement: ''
  }),
  getters: {
    getCurrentElement: (state) => state.components.find(component => component.id === state.currentElement)
  },
  actions: {
    addComponent (props:Partial<TextComponentProps>) {
      const newComponent:ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props
      }
      this.components.push(newComponent)
    },
    setActive (id: string) {
      this.currentElement = id
    }
  }
})

export default useEditorStore
