<template>
  <header>
    <h1>DASHBOARD</h1>
  </header>
  <div id="rubydurian-maincontent">
    Main Content
  </div>
</template>


<script>
/** IMPORT */
import Navigation from './Navigation.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      greeting: "Xin chào mọi người"
    };
  },
  components: {
    Navigation,
  },
};
</script>


<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>