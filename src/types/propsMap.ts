import { TextComponentProps } from './defaultProps'

export interface PropToForm{
  component: string
  value?: string
  text?: string
  extra?: {
    [key: string]: any
  }
  subComponent?: string
  options?: {
    label: string
    value: any
  }[]
  initalTransform?: (v:any) => any
}

export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}
export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'a-textarea',
    value: '',
    text: '文本',
    extra: {
      row: 3
    }
  },
  fontSize: {
    component: 'a-input-number',
    value: '12px',
    text: '字号'
  },
  lineHeight: {
    component: 'a-slider',
    text: '行高',
    extra: {
      min: 1,
      max: 3,
      step: 0.1
    },
    initalTransform: (v: string) => parseFloat(v)
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      {
        label: '左',
        value: 'left'
      },
      {
        label: '中',
        value: 'center'
      },
      {
        label: '右',
        value: 'right'
      }
    ]
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '字体',
    options: [
      {
        label: '无',
        value: ''
      },
      {
        label: '宋体',
        value: '"SimSun","STSong"'
      },
      {
        label: '黑体',
        value: '"SimHei","STHeiti"'
      },
      {
        label: '楷体',
        value: '"KaiTi","STKaiti"'
      }, {
        label: '仿宋',
        value: '"FangSong","STFangsong"'
      }
    ]
  }
}
