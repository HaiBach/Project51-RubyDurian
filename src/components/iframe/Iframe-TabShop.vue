<template>
  <div class="tab tab__shop">
    <div class="tab__inner du-flex du-flex-wrap du-pt-5">

      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
    </div>

    <Footer to="/service"></Footer>
  </div>
</template>


<script>
import Footer from './Iframe-Footer.vue'
import ShopItem from './Shop-Item.vue'

export default {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  components: {
    Footer, ShopItem,
  }
}
</script>


<style scoped>
  .tab__inner {
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
  }

  /** Shop Item */
  .shop-item:hover .shop-item__inner  {
    background-color: #FEF3C7;
    border-color: #FBBF24;
  }
  .shop-item__footer {
    font-size: 12px;
    color: #6B7280;
  }
</style>