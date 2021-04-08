<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-p-2.5">
    Dashboard Content
  </div>
</template>


<script>
/** IMPORT */
import Header from './Header.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      title: 'Dashboard',

    }
  },
  components: {
    Header,
  },
};
</script>


<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>