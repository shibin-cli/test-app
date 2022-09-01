<script setup lang="ts">
import { TextComponentProps } from '@/types/defaultProps'
import { reduce } from 'lodash-es'
import { computed } from 'vue'
import { mapPropsToForms, PropsToForms } from '@/types/propsMap'
interface Props {
  current: Partial<TextComponentProps>
}
const props = defineProps<Props>()
const finalProps = computed(() => {
  return reduce(props.current, (res, val, key) => {
    console.log(res, val)
    const newKey = key as keyof TextComponentProps
    const item = mapPropsToForms[newKey]
    if (item) {
      item.value = item.initalTransform ? item.initalTransform(val) : val
      res[newKey] = item
    }
    return res
  }, {} as Required<PropsToForms>)
})
</script>
<template>
  <h1>form</h1>
  <div
    v-for="(val, key) in finalProps"
    :key="key"
    class="prop-item"
  >
    <div class="prop-label">
      {{ val.text }}
    </div>
    <div class="prop-component">
      <component
        :value="val.value"
        :is="val.component"
        v-bind="val.extra"
      >
        <template v-if="val.options">
          <component
            :is="val.subComponent"
            v-for="(opt,k) in val.options"
            :key="k"
            :value="opt.value"
          >
            {{ opt.label }}
          </component>
        </template>
      </component>
    </div>
  </div>
  {{ current }}
</template>
<style lang="scss">
  .prop-item{
    display: flex;
    margin-bottom: 8px;
    .prop-label{
      width: 60px;
      padding-left: 10px;
    }
    .prop-component{
      flex: 1;
      display: inline-block;
    }
  }
</style>
