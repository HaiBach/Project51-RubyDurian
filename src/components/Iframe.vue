<template>
  <!-- HEADER -->
  <!-- <Header title="1. TIME"></Header> -->
  <Header title="2. SHOP"></Header>

  <main class="du-mt-12">
    <div class="tabs">

      <!-- Router Outlet -->
      <router-view></router-view>

    </div>
  </main>
  <footer>
    <div class="footer__inner du-flex du-justify-center du-px-5 du-py-10">
      <button class="du-block du-w-64 du-px-5 du-py-2.5 du-rounded-md du-bg-yellow-400 du-text-gray-800 du-text-center" @click="$router.go(1)">Next</button>
    </div>
  </footer>
  <router-link to="/">Time</router-link>
  <router-link to="/shop">Shop</router-link>
  <router-link to="/service">Services</router-link>
  <router-link to="/staff">Staffs</router-link>
  <router-link to="/sign-in">Sign In</router-link>
  <router-link to="/customer-info">Customer Info</router-link>
  <router-link to="/summary">Summary</router-link>
  <router-link to="/success">Success</router-link>
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