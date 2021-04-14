<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-mt-14">
    <TopContent></TopContent>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="MANAGER" class-more="du-bg-green-500 du-text-white"></GroupName>

      <div class="du-customer-items du-flex du-flex-wrap">
        <StaffItem type="manager"></StaffItem>
        <StaffItem type="manager"></StaffItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="LEADER" class-more="du-bg-blue-500 du-text-white"></GroupName>
      
      <div class="du-customer-items du-flex du-flex-wrap">
        <StaffItem type="leader"></StaffItem>
        <StaffItem type="leader"></StaffItem>
        <StaffItem type="leader"></StaffItem>
      </div>
    </div>

    <div class="du-customers-group du-px-5 du-pb-20">
      <GroupName name="MEMBER" class-more="du-bg-gray-600 du-text-white"></GroupName>
      
      <div class="du-customer-items du-flex du-flex-wrap">
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
        <StaffItem type="member"></StaffItem>
      </div>
    </div>
  </div>
</template>


<script>
/** IMPORT */
import Header from './Header.vue'
import TopContent from './Top-Content.vue'
import GroupName from './Group-Name.vue'
import StaffItem from './Staff-Item.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      title: 'Staffs',
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  components: {
    Header, TopContent, GroupName, StaffItem,
  },
};
</script>


<style scoped>
</style>