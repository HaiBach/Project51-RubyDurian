<template>
  <div class="du-service-item du-w-1/4 du-p-5" :class="classType">
    <div class="du-service-item__inner du-overflow-hidden du-flex du-rounded-lg">

      <div class="du-service-item__left">
        <img :src="urlThumbnail" alt="Service Thumbnail" class="du-w-36">
      </div>
      <div class="du-service-item__right du-flex du-flex-col du-justify-center du-flex-1 du-px-5 du-py-3 du-border-2 du-rounded-r-lg">
        <div class="du-service-item__name du-pr-10 du-text-base du-font-bold">Eyebrow & Lips (Waxing)</div>
        <div class="du-service-item__footer du-flex du-items-center du-mt-2.5">
          <div class="du-service-item__allcost du-pr-4">
            <span>20m</span>
            <i class="du-icon-clock du-pl-1.5"></i>
          </div>
          <div class="du-service-item__return du-pr-4">
            <span>23</span>
            <i class="du-icon-cash-stack du-pl-1.5"></i>
          </div>
          <div class="du-service-item__booking du-pr-4">
            <span>102</span>
            <i class="du-icon-file-earmark-plus du-pl-1.5"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  props: ['type'],
  data() {
    return {
      urlThumbnail: window.rubydurianVA.urlPlugin + '/public/service/service-01.png',
      listType: {
        combo: {
          classType: 'du-service__combo',
          classIcon: 'du-icon-diamond',
        },
        item: {
          classType: 'du-service__item',
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
  .du-service__combo .du-service-item__inner {
    background-color: #FFFBEB;
  }
  .du-service__item .du-service-item__inner {
    background-color: #F9FAFB;
  }

  .du-service-item__right {
    border-left-width: 0;
  }
  .du-service__combo .du-service-item__right {
    border-color: #FBBF24;
  }
  .du-service__item .du-service-item__right {
    border-color: #D1D5DB;
  }


  /** Name */
  .du-service-item__name {
    font-size: 18px;
  }
  /** Footer */
  .du-service-item__footer {
    font-size: 12px;
  }
</style>