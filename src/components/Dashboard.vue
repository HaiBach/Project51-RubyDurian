<template>
  <!-- HEADER -->
  <!-- <Header :title="title"></Header> -->

  <div id="rubydurian-maincontent" class="du-p-2.5 du-mt-14">
    <router-link :to="{ name: 'Booking1', query: { page: 'rubydurian-booking', type: 'edit' }}">Booking 1</router-link>
    <router-link :to="{ name: 'Booking2', query: { page: 'rubydurian-booking', type: 'edit', id: '02' }}">Booking 2</router-link>

    <ul class="du-flex du-flex-wrap du-p-10">
      <li
        v-for="item in list"
        :key="item.key"
        class="du-w-1/2 du-m-0">
        <div class="item__inner du-p-6 du-m-2 du-bg-gray-100 du-text-gray-600 du-rounded-md">
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
/** IMPORT */
// import Header from './Header.vue'


/** EXPORT */
const Dashboard = {
    data() {
    return {
      title: 'Dashboard',
      list: [
        { key: 0, text: 'The block is currently under construction' },
        { key: 1, text: 'The block is currently under construction' },
        { key: 2, text: 'The block is currently under construction' },
        { key: 3, text: 'The block is currently under construction' },
        { key: 4, text: 'The block is currently under construction' },
        { key: 5, text: 'The block is currently under construction' },
        { key: 6, text: 'The block is currently under construction' },
        { key: 7, text: 'The block is currently under construction' },
        { key: 9, text: 'The block is currently under construction' },
        { key: 10, text: 'The block is currently under construction' },
        { key: 11, text: 'The block is currently under construction' },
        { key: 12, text: 'The block is currently under construction' },
        { key: 13, text: 'The block is currently under construction' },
        { key: 14, text: 'The block is currently under construction' },
        { key: 15, text: 'The block is currently under construction' },
        { key: 16, text: 'The block is currently under construction' },
        { key: 17, text: 'The block is currently under construction' },
        { key: 19, text: 'The block is currently under construction' },
      ]
    }
  },
  components: {
    // Header,
  },
};
export default Dashboard
</script>


<style scoped>
</style>