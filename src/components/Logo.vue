<template>
  <div class="du-nav__logo du-text-center du-py-5 du-px-2.5 hover:du-opacity-50">
    <router-link to="/admin.php?page=rubydurian" class="du-inline-block">
      <img :src="urlPlugin + '/src/images/logo.svg'" alt="Logo RubyDurian">
    </router-link>
  </div>
</template>


<script>
module.exports = {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    };
  }
};
</script>


<style scoped>
</style>