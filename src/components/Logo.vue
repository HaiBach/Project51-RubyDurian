<template>
  <div class="du-nav__logo du-text-center du-py-5 du-px-2.5 hover:du-opacity-50">
    <router-link
      :to="{ name: linkto.name, query: linkto.query }"
      class="du-inline-block focus:du-shadow-none">
      <img
        :src="urlPlugin + '/src/images/logo.svg'"
        alt="Logo RubyDurian"
        class="focus:du-outline-none">
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      linkto: { name: 'Dashboard', query: { page: 'rubydurian' }},
    }
  }
}
</script>


<style scoped>
  .du-nav__logo img {
    width: 62px;
    height: auto;
  }
</style>