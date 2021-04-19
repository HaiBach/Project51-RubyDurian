<template>
  <div class="du-service-item du-mb-2.5" :class="classType">
    <div class="du-service-item__inner du-overflow-hidden du-flex du-rounded-lg">

      <div class="du-service-item__left">
        <img :src="urlThumbnail" alt="Service Thumbnail" class="du-w-20 du-h-20 du-object-cover">
      </div>
      <div class="du-service-item__right du-flex-1 du-flex du-px-5 du-py-3 du-border-2 du-rounded-r-lg">
        <div class="du-service-item__name du-flex-1 du-flex du-items-center du-pr-5 du-text-base du-font-bold">
          <h3>Eyebrow & Lips (Waxing)</h3>
        </div>

        <div class="du-service-item__footer du-flex du-items-center">
          <div class="item-footer__left du-pl-5 du-border-l du-border-dashed du-border-gray-500">
            <div class="du-item__allcost">
              <i class="du-icon-clock du-pr-1.5"></i>
              <span>20m</span>
            </div>
            <div class="du-item__return">
              <i class="du-icon-clock du-pr-1.5"></i>
              <span>20 mins</span>
            </div>
          </div>

          <div class="item-footer__right du-pl-8">
            <form action="">
              <div class="form-checked du-relative">
                <input type="checkbox" :id="'service-' + getIdRandom" name="service" value="Eyebrow & Lips (Waxing)" class="du-absolute du-invisible">
                <label :for="'service-' + getIdRandom" class="du-block du-w-8 du-h-8"></label>
              </div>
            </form>
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
        },
        item: {
          classType: 'du-service__item',
        },
      }
    }
  },
  computed: {
    getIdRandom() {
      const id = Math.round(Math.random() * 100000)
      return id
    },

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
    background-color: #F9FAFB;
  }
  .du-service__item .du-service-item__inner {
    background-color: #F9FAFB;
  }

  .du-service-item__right {
    border-left-width: 0;
  }
  .du-service__combo .du-service-item__right {
    border-color: #D1D5DB;
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
    font-size: 14px;
  }

  /** Form */
  label {
    position: relative;
  }
  label::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: 2px solid #D1D5DB;
    background-color: #fff;
    transition: background-color 0.2s;
  }
  label::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  input[type="checkbox"]:checked + label::before {
    border-color: #F59E0B;
    /* background-color: #FEF3C7; */
  }
</style>