<template>
  <div class="du-group-name du-text-center">
    <div class="du-group-name__item du-inline-block du-w-52 du-px-5 du-py-1 du-rounded-md du-font-bold" :class="[classMore]">{{ name }}</div>
  </div>
</template>


<script>
<<<<<<< HEAD
export default {
=======
module.exports = {
>>>>>>> 5cc63d54a9e12a042304609f73b2a0c08f949971
  props: ['name', 'classMore']
}
</script>


<style scoped>
  .du-group-name__item {
    font-size: 0.75rem;
    letter-spacing: 3px;
  }
</style>