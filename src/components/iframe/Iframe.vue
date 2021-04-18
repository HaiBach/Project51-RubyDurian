<template>
  <!-- HEADER -->
  <!-- <Header title="1. TIME"></Header> -->
  <Header></Header>

  <main class="du-mt-12">
    <div class="tabs">

      <!-- Router Outlet -->
      <router-view></router-view>

    </div>
  </main>
  
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