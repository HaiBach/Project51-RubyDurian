<template>
  <div class="tab tab__time">
    <div class="tab__inner du-px-5 du-pt-5">

      <div class="staff-group du-pt-5 du-pb-10">
        <ServiceItem type="item" isActived="true"></ServiceItem>
        <StaffItems></StaffItems>
      </div>

      <div class="staff-group du-pt-5 du-pb-10">
        <ServiceItem type="item" isActived="true"></ServiceItem>
        <StaffItems></StaffItems>
      </div>

    </div>

    <!-- Footer -->
    <Footer to="/sign-in"></Footer>
  </div>
</template>


<script>
import Footer from './Iframe-Footer.vue'
import ServiceItem from './TabService-Item.vue'
import StaffItems from './TabStaff-Items.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Footer, ServiceItem, StaffItems,
  },
}
</script>


<style scoped>
  .tab__inner {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
</style>