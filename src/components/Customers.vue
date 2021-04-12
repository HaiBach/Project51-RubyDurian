<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-px-5 du-py-2.5">
    <div id="du-customers-vip">
      <div class="du-customer-group">
        <GroupName name="VIP" class-more="du-bg-yellow-400 du-text-gray-700"></GroupName>

        <div class="du-customer-items du-flex du-flex-wrap">
          <CustomerItem></CustomerItem>
          <CustomerItem></CustomerItem>
          <CustomerItem></CustomerItem>
          <CustomerItem></CustomerItem>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
/** IMPORT */
import Header from './Header.vue'
import GroupName from './Group-Name.vue'
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
    Header, GroupName, CustomerItem,
  },
};
</script>


<style scoped>
</style>