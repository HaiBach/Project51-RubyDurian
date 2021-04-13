<template>
  <div class="du-customer-item du-w-1/4 du-p-5" :class="classType">
    <div class="du-customer-item__inner du-overflow-hidden du-flex du-px-5 du-py-2.5 du-rounded-lg du-border-2 du-border-solid">

      <div class="du-customer-item__left du-pr-5">
        <img :src="urlAvatar" alt="Avatar" class="du-w-20 du-rounded-full">
      </div>
      <div class="du-customer-item__right du-flex-1 du-relative">
        <div class="du-customer-item__icon du-absolute du-rounded-full">
          <i :class="classIcon"></i>
        </div>

        <div class="du-customer-item__name du-pr-10"><strong>Gabriel Armstrong</strong></div>
        <div class="du-customer-item__birthday">21 Nov, 1982</div>
        <div class="du-customer-item__gender">Male</div>
        <div class="du-customer-item__email">gabriel.armstrong@gmail.com</div>
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
      urlAvatar: window.rubydurianVA.urlPlugin + '/public/face/face01.png',
      listType: {
        vip: {
          classType: 'du-customer__vip',
          classIcon: 'du-icon-diamond',
        },
        silver: {
          classType: 'du-customer__silver',
          classIcon: 'du-icon-x-diamond',
        },
        member: {
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
      return this.listType['member']['classType']
    },

    // Return tên class icon
    classIcon() {
      if (this.type !== undefined) {
        return this.listType[this.type]['classIcon']
      }
      return this.listType['member']['classIcon']
    },
  }
}
</script>


<style scoped>
  /** BACKGROUND + BORDER */
  .du-customer__vip .du-customer-item__inner {
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

  /** ICON */
  .du-customer-item__icon {
    top: -3px;
    right: -8px;
    width: 26px;
    height: 26px;
    padding: 5px;
    line-height: 18px;
    text-align: center;
  }
  .du-customer__vip .du-customer-item__icon {
    background-color: #000;
    color: #FBBF24;
    font-size: 12px;
  }
  .du-customer__silver .du-customer-item__icon {
    background-color: #fff;
    color: #3B82F6;
    font-size: 14px;
  }
  .du-customer__member .du-customer-item__icon {
    background-color: #fff;
    color: #6B7280;
    font-size: 16px;
  }
  
  /** FOOTER */
  .du-customer-item__footer {
    font-size: 11px;
  }
</style>