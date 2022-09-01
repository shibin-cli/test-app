import { mapValues, without } from 'lodash-es'
export interface ComponentData {
  id: string
  props: {
    [key: string]: any
  }
  name: string
}
export const commonDefaultProps = {
  width: '100%',
  height: '',
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '0',
  paddingBottom: '0',
  borderStyle: '0',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  boxShadow: '0 0 0 #000',
  opacity: '1',
  position: 'absolute',
  left: '0',
  top: '0',
  actionType: ''
}
export interface CommonProps {
  width: string
  height: string
  paddingLeft: string
  paddingRight: string
  paddingTop: string
  paddingBottom: string
  borderStyle: string
  borderColor: string
  borderWidth: string
  borderRadius: string
  boxShadow: string
  opacity: string
  position: string
  left: string
  top: string
  actionType: string
}
export interface TextComponentProps extends CommonProps{
  text: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  textDecoration: string
  lineHeight: string
  textAlign: string
  color: string
  backgroundColor: string
  url: string
}
export const textDefaultProps = {
  text: '文本内容',
  fontSize: '12px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000',
  backgroundColor: '',
  url: '',
  ...commonDefaultProps
}
export const transformToComponentsProps = (props: TextComponentProps) => mapValues(props, item => ({
  type: item.constructor as StringConstructor,
  default: item
}))

export const textStylePropsNames = without(Object.keys(textDefaultProps), 'text', 'actionType', 'url')
