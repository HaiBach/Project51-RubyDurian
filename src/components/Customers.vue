<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="">
    <TopContent></TopContent>

    <div class="du-customers-group du-px-5 du-pb-16">
      <GroupName name="VIP" class-more="du-bg-yellow-400 du-text-gray-700"></GroupName>
      <div class="du-customer-items du-flex du-flex-wrap">
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-16">
      <GroupName name="SILVER" class-more="du-bg-blue-500 du-text-white"></GroupName>
      <div class="du-customer-items du-flex du-flex-wrap">
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-16">
      <GroupName name="MEMBER" class-more="du-bg-gray-600 du-text-white"></GroupName>
      <div class="du-customer-items du-flex du-flex-wrap">
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
        <CustomerItem></CustomerItem>
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
import TopContent from './Top-Content.vue'
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
    Header, TopContent, GroupName, CustomerItem,
  },
};
</script>


<style scoped>
</style>