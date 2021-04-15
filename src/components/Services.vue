<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-mt-14">
    <TopContent></TopContent>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="COMBO PACKAGE" class-more="du-bg-yellow-400 du-text-gray-700"></GroupName>

      <div class="du-customer-items du-flex du-flex-wrap">
        <ServiceItem type="combo"></ServiceItem>
        <ServiceItem type="combo"></ServiceItem>
        <ServiceItem type="combo"></ServiceItem>
        <ServiceItem type="combo"></ServiceItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="NATURAL NAILS SERVICES" class-more="du-bg-gray-600 du-text-white"></GroupName>

      <div class="du-customer-items du-flex du-flex-wrap">
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="SPA TREATMENT" class-more="du-bg-gray-600 du-text-white"></GroupName>

      <div class="du-customer-items du-flex du-flex-wrap">
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
        <ServiceItem type="item"></ServiceItem>
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
export default {
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