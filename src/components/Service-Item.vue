<template>
  <div class="du-customer-item du-w-1/4 du-p-5" :class="classType">
    <div class="du-customer-item__inner du-overflow-hidden du-flex du-rounded-lg">

      <div class="du-customer-item__left du-pr-5">
        <img :src="urlAvatar" alt="Service Thumbnail" class="du-w-36">
      </div>
      <div class="du-customer-item__right du-flex-1 du-bg-gray-100">
        <div class="du-customer-item__name du-pr-10"><strong>Eyebrow & Lips (Waxing)</strong></div>
        <div class="du-customer-item__footer du-flex du-items-center du-pt-2.5 du-mt-2.5 du-border-t du-border-dashed du-border-gray-400">
          <div class="du-customer-item__allcost du-pr-4 du-opacity-80">
            <span>$10.000</span>
            <i class="du-icon-cash-stack du-pl-1.5"></i>
          </div>
          <div class="du-customer-item__return du-pr-4 du-opacity-80">
            <span>50</span>
            <i class="du-icon-arrow-clockwise du-pl-1.5"></i>
          </div>
          <div class="du-customer-item__booking du-pr-4 du-opacity-80">
            <span>12</span>
            <i class="du-icon-calendar-event du-pl-1.5"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
module.exports = {
  props: ['type'],
  data() {
    return {
      urlAvatar: window.rubydurianVA.urlPlugin + '/public/service/service-01.png',
      listType: {
        combo: {
          classType: 'du-service__combo',
          classIcon: 'du-icon-diamond',
        },
        item: {
          classType: 'du-customer__member',
          classIcon: 'du-icon-owner',
        },
      }
    }
  },
  computed: {
    // Return class phân biệt loại Customer component
    classType() {
      if (this.type !== undefined) {
        return this.listType[this.type]['classType']
      }
      return this.listType['item']['classType']
    },
  }
}
</script>


<style scoped>
  /** BACKGROUND + BORDER */
  .du-service__combo .du-customer-item__inner {
    background-color: #FFF7E1;
    border-color: #FBBF24;
  }
  .du-customer__silver .du-customer-item__inner {
    background-color: #E8F5FF;
    border-color: #3B82F6;
  }
  .du-customer__member .du-customer-item__inner {
    background-color: #F9FAFB;
    border-color: #D1D5DB;
  }
</style>