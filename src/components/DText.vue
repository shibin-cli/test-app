<script lang="ts">
import { transformToComponentsProps, textStylePropsNames, textDefaultProps } from '@/types/defaultProps'
import { defineComponent } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
const defaultProps = transformToComponentsProps(textDefaultProps)

export default defineComponent({
  props: {
    ...defaultProps,
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup (props) {
    const { style, handleClick } = useComponentCommon(props, textStylePropsNames)
    return {
      style,
      handleClick
    }
  }
})
</script>
<template>
  <component
    :is="tag"
    :style="style"
    class="d-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>
<style>
.d-text-component{
  margin-bottom: 0;
  cursor: pointer;
}
</style>
