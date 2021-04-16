<template>
  <p>
    <button class="du-px-4 du-py-1.5 du-mb-2.5 du-rounded-md du-bg-yellow-500 du-text-gray-800 du-text-sm">Booking on RubyDurian</button>
  </p>
  <iframe :src="srcIframe" width="800" height="500" title="Booking on RubyDurian" class="du-rounded-md du-border du-border-gray-600 du-bg-white"></iframe>
</template>


<script>
export default {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      greeting: "Xin chào mọi người"
    }
  },
  computed: {
    srcIframe() {
      return this.urlPlugin + 'src/pages/frontend/iframe/'
    }
  }
}
</script>


<style scoped>
</style>