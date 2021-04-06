<template>
  <h1>HOME PAGE</h1>
  <p class="du-bg-blue-600">{{ greeting }} World!</p>
</template>

<script>
// import defaultExport from './helloworld.js'

module.exports = {
  data() {
    return {
      greeting: "Xin chào mọi người"
    };
  },
  computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      }
      else {
        this.$route.push('/login')
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>