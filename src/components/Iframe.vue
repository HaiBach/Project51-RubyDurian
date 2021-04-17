<template>
  <!-- HEADER -->
  <!-- <Header title="1. TIME"></Header> -->
  <Header title="2. SHOP"></Header>

  <main class="du-mt-12">
    <div class="tabs">
      <!-- Tab Time -->
      <!-- <TabTime></TabTime> -->
      <TabShop></TabShop>

    </div>
  </main>
  <footer>
    <div class="footer__inner du-flex du-justify-center du-px-5 du-py-10">
      <button class="du-block du-w-64 du-px-5 du-py-2.5 du-rounded-md du-bg-yellow-400 du-text-gray-800">Next</button>
    </div>
  </footer>
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