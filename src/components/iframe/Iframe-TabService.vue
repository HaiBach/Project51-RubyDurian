<template>
  <div class="tab tab__service">
    <div class="tab__inner du-px-5 du-pt-5">

      <div class="du-group">
        <GroupName name="COMBO PACKAGE" class-more="du-bg-gray-600 du-text-white"></GroupName>

        <div class="du-service-items du-pt-5 du-pb-16">
          <ServiceItem type="combo"></ServiceItem>
          <ServiceItem type="combo"></ServiceItem>
          <ServiceItem type="combo"></ServiceItem>
        </div>
      </div>

      <div class="du-group">
        <GroupName name="NATURAL NAILS SERVICES" class-more="du-bg-gray-600 du-text-white"></GroupName>

        <div class="du-service-items du-pt-5 du-pb-16">
          <ServiceItem type="combo"></ServiceItem>
          <ServiceItem type="combo"></ServiceItem>
          <ServiceItem type="combo"></ServiceItem>
          <ServiceItem type="combo"></ServiceItem>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <Footer to="/staff"></Footer>
  </div>
</template>


<script>
import Footer from './Iframe-Footer.vue'
import GroupName from '../Group-Name.vue'
import ServiceItem from './TabService-Item.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Footer, GroupName, ServiceItem,
  }
}
</script>


<style scoped>
  .tab__inner {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
</style>