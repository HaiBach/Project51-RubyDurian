<template>
  <div class="du-staff-item du-w-1/4 du-p-5" :class="classType">
    <div class="du-staff-item__inner du-overflow-hidden du-flex du-px-5 du-py-2.5 du-rounded-lg du-border-2 du-border-solid">

      <div class="du-staff-item__left du-pr-5">
        <img :src="urlAvatar" alt="Avatar" class="du-w-20 du-rounded-full">
      </div>
      <div class="du-staff-item__right du-flex-1 du-relative">
        <div class="du-staff-item__icon du-absolute du-rounded-full">
          <i :class="classIcon"></i>
        </div>

        <div class="du-staff-item__name du-pr-10"><strong>Harold Mcpherson</strong></div>
        <div class="du-staff-item__birthday">22 Apr, 1971</div>
        <div class="du-staff-item__gender">Male</div>
        <div class="du-staff-item__tel">+1 901 234 5678</div>
        <div class="du-staff-item__email">harold.mcpherson@gmail.com</div>
        <div class="du-staff-item__tags">
          <div class="du-staff-item__tag du-px-2.5 du-py-1 du-rounded du-bg-green-500 du-text-white du-font-xs">Marketing Manager</div>
          <div class="du-staff-item__tag">Department Manager</div>
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
      urlAvatar: window.rubydurianVA.urlPlugin + '/public/face/face02.png',
      listType: {
        manager: {
          classType: 'du-staff__manager',
          classIcon: 'du-icon-diamond',
        },
        leader: {
          classType: 'du-staff__leader',
          classIcon: 'du-icon-x-diamond',
        },
        member: {
          classType: 'du-staff__member',
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
  .du-staff__manager .du-staff-item__inner {
    background-color: #E0F5F3;
    border-color: #10B981;
  }
  .du-staff__leader .du-staff-item__inner {
    background-color: #E8F5FF;
    border-color: #3B82F6;
  }
  .du-staff__member .du-staff-item__inner {
    background-color: #F9FAFB;
    border-color: #D1D5DB;
  }

  /** ICON */
  .du-staff-item__icon {
    top: -3px;
    right: -8px;
    width: 26px;
    height: 26px;
    padding: 5px;
    line-height: 18px;
    text-align: center;
  }
  .du-staff__manager .du-staff-item__icon {
    background-color: #000;
    color: #10B981;
    font-size: 12px;
  }
  .du-staff__leader .du-staff-item__icon {
    background-color: #fff;
    color: #3B82F6;
    font-size: 14px;
  }
  .du-staff__member .du-staff-item__icon {
    background-color: #fff;
    color: #6B7280;
    font-size: 16px;
  }
  
  /** FOOTER */
  .du-staff-item__footer {
    font-size: 11px;
  }
</style>