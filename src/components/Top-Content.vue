<template>
<div id="rubydurian-topcontent" class="du-px-10 du-py-2.5">
  <div class="du-topcontent__inner du-flex du-justify-between">
    <div class="du-topcontent__left"></div>
    <div class="du-topcontent__right">
      <form action="">
        <div class="du-topcontent-search">
          <input id="rubydurian-search" type="text" value="" placeholder="Search...">
        </div>
      </form>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      greeting: "Xin chào mọi người"
    }
  }
}
</script>


<style scoped>
input[type="text"] {
  width: 266px;
  padding: 4px 15px;
  border-color: #ddd  ;
  background-color: #f5f5f5;
}
</style>