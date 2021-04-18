<template>
  <footer>
    <div class="footer__inner du-flex du-justify-center du-px-5 du-py-10">
      <button class="du-block du-w-64 du-px-5 du-py-2.5 du-rounded-md du-bg-yellow-400 du-text-gray-800 du-text-center" @click="gotoNextLink">Next</button>
    </div>
  </footer>
</template>


<script>
export default {
  props: ['to'],
  data() {
    return {
    }
  },
  computed: {
    gotoNextLink() {
      this.$router.push( this.to )
    }
  }
}
</script>


<style scoped>
</style>