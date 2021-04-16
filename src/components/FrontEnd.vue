<template>
  <p>
    <button class="rubydurian-button du-px-4 du-py-1.5 du-mb-2.5 du-rounded-md du-text-sm">Booking on RubyDurian</button>
  </p>
  <iframe :src="srcIframe" width="800" height="600" title="Booking on RubyDurian" class="du-rounded-md du-bg-white"></iframe>
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
      return this.urlPlugin + 'iframe.php'
    }
  }
}
</script>


<style scoped>
  button.rubydurian-button {
    background-color: #F59E0B;
    color: #1F2937;
  }
  iframe {
    border: 1px solid rgba(0,0,0,0.5);
  }
</style>