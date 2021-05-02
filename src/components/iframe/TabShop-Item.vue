<template>
  <div class="shop-item du-w-1/2 du-p-3.5 du-cursor-pointer" :class="classList" @click="toggleClassActive">
    <div class="shop-item__inner du-overflow-hidden du-rounded-lg du-border-2 du-border-gray-200 du-bg-gray-100">
      <div class="shop-item__header du-flex du-justify-center du-px-7 du-py-2.5">
        <img :src="urlPlugin + 'public/images/shop-1.jpg'" alt="Shop Thumbnail" class="du-block du-w-20 du-h-20 du-rounded-full">
      </div>
      <div class="shop-item__content du-px-7 du-pt-1.5">
        <div class="shop-item__name du-font-bold">Shop 1 - Rose</div>
        <div class="shop-item__address">3140  Clement Street, GA State, Atlanta City</div>
      </div>
      <div class="shop-item__footer du-flex du-flex-wrap du-py-2.5 du-mx-7 du-mt-3 du-border-t du-border-dashed du-border-gray-400">
        <div class="shop-item__time du-mr-5"><i class="du-icon-time"></i>08:00 - 20:00</div>
        <div class="shop-item__services"><i class="du-icon-time"></i>52</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['isActived'],
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      classList: {
        'is-actived': this.isActived,
        'du-active': this.isActived,
      }
    }
  },
  methods: {
    toggleClassActive() {
      const $el = this.$el
      const classActive = 'du-active'
      if (!this.isActived) {

        /** TH: Khong co class `du-active`  */
        if (!$el.classList.contains(classActive)) {
          $el.classList.add(classActive)
        }
        else {
          $el.classList.remove(classActive)
        }
      }
    }
  }
}
</script>


<style scoped>
  /** Shop Item */
  .shop-item:hover .shop-item__inner  {
    border-color: #D1D5DB;
  }
  .shop-item.du-active .shop-item__inner  {
    background-color: #FEF3C7;
    border-color: #FBBF24;
  }
  .shop-item__footer {
    font-size: 12px;
    color: #6B7280;
  }

  /** MEDIA **/
  @media screen and (max-width: 450px) {
    
  }
</style>