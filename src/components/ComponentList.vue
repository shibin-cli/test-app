<script lang="ts" setup>
import { TextComponentProps } from '@/types/defaultProps'
import DText from './DText.vue'
const list = [{
  tag: 'div',
  fontSize: '30px',
  lineHeight: '1',
  color: 'red',
  text: '大标题',
  width: '100px',
  position: 'static',
  fontWeight: 'bold',
  fontFamily: '"SimHei","STHeiti"'
}, {
  tag: 'div',
  fontSize: '12px',
  width: '100px',
  position: 'static',
  lineHeight: '1',
  text: '文本内容',
  fontFamily: '"SimHei","STHeiti"'
}, {
  tag: 'a-button',
  fontSize: '18px',
  lineHeight: '1',
  position: 'static',
  text: '按钮',
  width: '100px',
  textAlign: 'center',
  type: 'primary',
  color: '#fff',
  fontFamily: ''
}]
const emit = defineEmits<{(e: 'item-click', item: Readonly<Partial<TextComponentProps>>): void}>()

</script>
<template>
  组件列表
  <div
    v-for="(item,index) in list"
    :key="index"
    class="component-item"
  >
    <d-text
      v-bind="item"
      @click="emit('item-click', item)"
    />
  </div>
</template>
<style scoped>
.component-item{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
}
</style>
