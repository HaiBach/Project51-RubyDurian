<template>
  <!-- HEADER -->
  <Header></Header>

  <main class="du-mt-12">
    <div class="tabs">

      <!-- Router Outlet -->
      <router-view></router-view>

    </div>
  </main>
</template>


<script>
import Header from './Iframe-Header.vue'
import TabTime from './Iframe-TabTime.vue'
import TabShop from './Iframe-TabShop.vue'

export default {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  components: {
    Header, TabTime, TabShop,
  }
}
</script>


<style scoped>
</style>