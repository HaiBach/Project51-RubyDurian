<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="">
    <TopContent></TopContent>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="COMBO PACKAGE" class-more="du-bg-gray-600 du-text-white"></GroupName>

      <div class="du-customer-items du-flex du-flex-wrap">
        <ServiceItem></ServiceItem>
      </div>
    </div>

  </div>
</template>


<script>
/** IMPORT */
import Header from './Header.vue'
import TopContent from './Top-Content.vue'
import GroupName from './Group-Name.vue'
import ServiceItem from './Service-Item.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      title: 'Services',
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  components: {
    Header, TopContent, GroupName, ServiceItem,
  },
};
</script>


<style scoped>
</style>