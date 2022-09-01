import { TextComponentProps } from '@/types/defaultProps'
import { pick } from 'lodash-es'
import { computed } from 'vue'

const useComponentCommon = (props: Readonly<Partial<TextComponentProps>>, picks: string[]) => {
  const style = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    style,
    handleClick
  }
}
export default useComponentCommon
