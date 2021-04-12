<template>
<div class="du-group-name du-text-center">
  <div class="du-group-name__item du-inline-block du-w-52 du-px-5 du-py-1 du-rounded-md du-font-sm du-font-bold" :class="[classMore]">{{ name }}</div>
</div>
</template>


<script>
module.exports = {
  props: ['name', 'classMore']
}
</script>


<style scoped>
.du-group-name__item {
  letter-spacing: 3px;
}
</style>