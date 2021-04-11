<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-p-2.5">
    <div id="du-customers-vip">
      <div class="du-customer-items du-flex du-flex-wrap">
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
      </div>
    </div>
  </div>
</template>


<script>
/** IMPORT */
import Header from './Header.vue'
import CustomerItem from './Customer-Item.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      title: 'Customers',
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  components: {
    Header, CustomerItem,
  },
};
</script>


<style scoped>
</style>