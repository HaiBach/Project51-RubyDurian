<template>
  <div class="du-service-item du-mb-2.5" :class="classList" @click="toggleClassActive">
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
            <div class="du-item__cost du-flex du-items-center">
              <i class="du-icon-attach-money du-inline-block du-pr-1"></i>
              <span>20</span>
            </div>
            <div class="du-item__time du-text-gray-400">
              <i class="du-icon-timer2 du-inline-block du-pr-1.5"></i>
              <span>20 min</span>
            </div>
          </div>

          <div class="item-footer__right du-pl-8">
            <form action="">
              <div class="form-checked du-relative">
                <input type="checkbox" :id="'service-' + inputID" name="service" value="Eyebrow & Lips (Waxing)" class="du-absolute du-invisible" :checked="isActived">
                <label :for="'service-' + inputID" class="du-block du-w-8 du-h-8"></label>
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
  props: ['type', 'isActived'],
  data() {
    return {
      urlThumbnail: window.rubydurianVA.urlPlugin + '/public/service/service-01.png',
      inputID: Math.round(Math.random() * 1000000),
      listType: {
        combo: {
          classType: 'du-service__combo',
        },
        item: {
          classType: 'du-service__item',
        },
      },
      classList: {
        'du-active': this.isActived,
        'is-actived': this.isActived,
        'du-service__combo': this.type === 'combo',
        'du-service__item': this.type === 'item',
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
  },
  methods: {
    toggleClassActive() {
      const $el = this.$el
      const $input = document.getElementById('service-' + this.inputID)
      const classActive = 'du-active'
      if (!this.isActived) {

        /** TH: Khong co class `du-active` */
        if (!$el.classList.contains(classActive)) {
          $el.classList.add(classActive)
          $input.checked = true
        }
        else {
          $el.classList.remove(classActive)
          $input.checked = false
        }
      }
    }
  },
}
</script>


<style scoped>
  .du-service-item {
    cursor: pointer;
  }

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
  
  /** Item Active */
  .du-service-item.du-active .du-service-item__inner {
    background-color: #FEF3C7;
  }
  .du-service-item.du-active .du-service-item__right {
    border-color: #FCD34D;
  }

  /** Name */
  .du-service-item__name {
    font-size: 18px;
  }
  /** Footer */
  .du-service-item__footer {
    font-size: 14px;
  }

  /** Icon */
  .du-item__cost i {
    height: 16px;
    font-size: 16px;
  }
  .du-item__time i {
    padding-left: 2px;
    font-size: 13px;
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
    font-family: 'rubydurian-iframe' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    content: '\e908';
    position: absolute;
    top: -2px;
    left: -2px;
    display: block;
    width: 32px;
    height: 32px;
    color: #D1D5DB;
    font-size: 36px;
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0;
    transform: perspective(600px) rotate(-180deg) translate3d(0,0,-1000px);
  }
  input[type="checkbox"]:checked + label::before {
    border-color: #F59E0B;
    background-color: #F59E0B;
  }
  input[type="checkbox"]:checked + label::after {
    color: #fff;
    opacity: 1;
    transform: perspective(600px) rotate(0) translate3d(0,0,0);
  }
  /* .du-service-item.du-active label::before {
    border-color: #F59E0B;
    background-color: #F59E0B;
  }
  .du-service-item.du-active label::after {
    color: #fff;
    opacity: 1;
    transform: perspective(600px) rotate(0) translate3d(0,0,0);
  } */

  /** MEDIA **/
  @media screen and (max-width: 450px) {
    .du-service-item__right {
      display: block;
      padding: 12px 18px;
    }
    .du-service-item__name {
      padding-right: 0;
      font-size: 15px;
      line-height: 1.4;
    }
    .du-service-item__footer {
      padding-top: 5px;
    }
    .item-footer__left {
      display: flex;
      align-items: center;
      padding-left: 0;
      border-left-width: 0;
    }
    .du-item__time {
      padding-left: 20px;
    }
    label {
      width: 24px;
      height: 24px;
    }
    label::before {
      width: 24px;
      height: 24px;
    }
    label::after {
      left: 0px;
      top: 0px;
      width: 24px;
      height: 24px;
      font-size: 26px;
    }
  }
</style>