<template>
  <div class="du-group-name du-text-center">
    <div class="du-group-name__item du-inline-block du-px-5 du-py-1 du-rounded-md du-font-bold" :class="[classMore]">{{ name }}</div>
  </div>
</template>


<script>
export default {
  props: ['name', 'classMore']
}
</script>


<style scoped>
  .du-group-name__item {
    min-width: 210px;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
</style>