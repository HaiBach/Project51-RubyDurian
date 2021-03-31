<template>
  <p class="du-bg-blue-600">{{ greeting }} World!</p>
</template>

<script>
module.exports = {
  data() {
    return {
      greeting: "Xin chào mọi người"
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