<template>
  <div class="wrapper">
    <a-row :gutter="16">
      <a-col
        class="template-item"
        :span="6"
        v-for="item in 16"
        :key="item"
      >
        <router-link :to="`/template/${item}`">
          <a-card
            hoverable
            style="width: 240px"
          >
            <template #cover>
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              >
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>
                www.instagram.com
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>
<style lang="scss">
.logo{
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.gutter-box{
  height: 200px;
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
