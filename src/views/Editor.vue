<script setup lang="ts">
import { DownOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { computed } from 'vue'
import DText from '@/components/DText.vue'
import ComponentList from '@/components/ComponentList.vue'
import useEditorStore from '@/store/editor'
import { TextComponentProps } from '@/types/defaultProps'
import EditorWrapper from '@/components/EditorWrapper.vue'
import EditorForm from '@/components/EditorForm.vue'

const editorStore = useEditorStore()
const data = computed(() => editorStore.components)
const currentElement = computed(() => editorStore.getCurrentElement)
function addComponent (item: Readonly<Partial<TextComponentProps>>) {
  editorStore.addComponent(item)
}
function setActive (id:string) {
  editorStore.setActive(id)
}
</script>
<template>
  <a-layout>
    <a-layout-header class="header">
      <div>
        <router-link
          to="/"
          class="logo"
        >
          Logo
        </router-link>
      </div>
      <a-space size="large">
        <router-link to="/editor">
          <a-button
            type="primary"
            shape="round"
          >
            预览和设置
          </a-button>
        </router-link>
        <a-button
          type="primary"
          shape="round"
        >
          保存
        </a-button>
        <a-button
          type="primary"
          shape="round"
        >
          发布
        </a-button>
        <a-dropdown-button>
          用户xxx
          <template #overlay>
            <a-menu>
              <a-menu-item key="1">
                <SettingOutlined /> 个人设置
              </a-menu-item>
              <a-menu-item key="1">
                <LoginOutlined /> 退出登录
              </a-menu-item>
            </a-menu>
          </template>
          <template #icon>
            <DownOutlined />
          </template>
        </a-dropdown-button>
      </a-space>
    </a-layout-header>
    <a-layout-content class="editor-wrap">
      <a-layout>
        <a-layout-sider
          width="300"
          :style="{background: '#fff', width:'300px'}"
        >
          <component-list @item-click="addComponent" />
        </a-layout-sider>
        <a-layout-content>
          <p>画布区域</p>
          <div class="editor-content">
            <EditorWrapper
              v-for="item in data"
              :key="item.id"
              :id="item.id"
              :active="currentElement?.id === item.id"
              @set-active="setActive"
            >
              <d-text
                :is="item.props.tag"
                v-bind="item.props"
              />
            </EditorWrapper>
          </div>
        </a-layout-content>
        <a-layout-sider
          width="300"
          :style="{background: '#fff'}"
        >
          <editor-form
            v-if="currentElement"
            :current="currentElement?.props"
          />
        </a-layout-sider>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
<style scoped lang="scss">
.editor-wrap{
  height: calc(100vh - 64px);
}
.ant-layout-content> p{
  line-height: 70px;
  margin-bottom: 0;
  text-align: center;
}
.editor-content{
  width: 375px;
  background-color: #fff;
  min-height: 560px;
  margin:0 auto;
  position: relative;
}
</style>
