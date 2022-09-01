<script lang="ts" setup>
const props = withDefaults(defineProps<{
  id: string
  active?: boolean
}>(), {
  active: false
})
const emit = defineEmits<{(e: 'set-active', id: string): void}>()
function itemClick () {
  emit('set-active', props.id)
}
</script>
<template>
  <div
    class="editor-wrapper"
    :class="{active: active}"
    @click="itemClick"
  >
    <slot />
  </div>
</template>
<style lang="scss">
  .editor-wrapper{
    display: inline-block;
    &.active{
      user-select: none;
      border: 1px solid #1890ff;
    }
  }
</style>
