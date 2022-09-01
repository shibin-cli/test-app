import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import './assets/css/normalize.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(Antd)
  .mount('#app')
