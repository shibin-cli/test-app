<script lang="ts" setup>
import { DownOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const withHeader = computed(() => route.meta.withHeader)
</script>
<template>
  <a-layout v-if="withHeader">
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
            创建设计
          </a-button>
        </router-link>
        <router-link to="/template/1">
          <a-button
            type="primary"
            shape="round"
          >
            我的作品
          </a-button>
        </router-link>
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
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">
      dev-cli-app
    </a-layout-footer>
  </a-layout>
  <router-view v-else />
</template>
  <style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    .logo{
      color: #fff;
      font-weight: bold;
      font-size: 20px;
    }
    .ant-dropdown-button>.ant-btn:first-child{
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    .ant-dropdown-button .ant-btn:last-child{
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  .wrapper{
    max-width: 1200px;
    margin: 0 auto;
    .template-item{
      margin-bottom: 20px;
    }
  }
  .footer{
    text-align: center;
  }
  </style>
