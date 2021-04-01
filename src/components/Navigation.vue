<template>
  <p class="du-bg-blue-600 du-text-white">{{ greeting }}</p>
</template>

<script>
// import defaultExport from './helloworld.js'

module.exports = {
  data() {
    return {
      greeting: "Day la Navigation component"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 4em;
  text-align: center;
}
</style>