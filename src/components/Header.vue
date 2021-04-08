<template>
  <header class="du-flex du-justify-between du-items-center du-px-10 du-border-b du-border-gray-300">
    <div class="du-header__left">
      <h2 class="du-text-xl du-font-bold">{{ title }}</h2>
    </div>
    <div class="du-header__right du-flex du-items-center">
      <div class="du-header__store du-ml-3">
        <div class="du-form-select">
          <form action="">
            <select name="store" id="" class="">
              <option value="all-store">-- All Stores --</option>
              <option value="store-1">Store 1</option>
              <option value="store-2">Store 2</option>
              <option value="store-3">Store 3</option>
              <option value="store-4">Store 4</option>
            </select>
          </form>
        </div>
      </div>
      <div class="du-header__notification du-ml-3">notification</div>
      <div class="du-header__owner du-ml-8">Owner</div>
    </div>
  </header>
</template>


<script>
module.exports = {
  props: ['title'],
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  }
}
</script>


<style scoped>
  header {
    height: 60px;
  }
</style>