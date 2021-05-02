<template>
  <header class="du-fixed du-top-0 du-left-0 du-w-full du-h-12 du-z-50">
    <div class="header__inner du-flex du-justify-between du-items-center du-px-5 du-h-12">
      <div class="header__control">
        <button class="header__back du-visible du-block du-w-14 du-p-2.5 du-rounded-md du-bg-white du-text-xs du-text-center" @click="$router.back()">
          <i class="du-icon-back du-block"></i>
        </button>
      </div>
      <div class="header__title">
        <h1 class="du-text-lg du-font-medium du-text-gray-800 du-text-center">{{ getTitle() }}</h1>
      </div>
      <div class="header__owner">
        <button class="du-flex du-justify-center du-items-center du-p-2 du-w-14 du-text-gray-500 du-text-center">
          <i class="du-icon-person du-block"></i>
        </button>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  props: ['title'],
  data() {
    return {
      titleList: {
        '/': '1. TIME',
        '/shop': '2. SHOP',
        '/service': '3. SERVICES',
        '/staff': '4. STAFFS',
        '/sign-in': '5. SIGN IN',
        '/customer-info': '6. CUSTOMER INFOMATION',
        '/summary': '7. CONFIRM YOUR APPOINTMENT',
        '/success': '8. SUCCESSFUL REGISTRATION',
      }
    }
  },
  methods: {
    getTitle() {
      const path = this.$router.currentRoute.value.path
      const title = this.titleList[path]
      if (title !== undefined) {
        return title
      }
      return 'RUBYDURIAN BOOKING'
    }
  },
}
</script>


<style scoped>
  /** Header */
  .header__title h1 {
    line-height: 1.2;
  }
  .header__inner {
    background-color: rgba(229,231,235, 0.75);
    -webkit-backdrop-filter: saturate(250%) blur(20px);
    backdrop-filter: saturate(250%) blur(20px);
    z-index: 99;
  }

  /** Button Back */
  .header__back {
    font-size: 11px;
    line-height: 17px;
    vertical-align: middle;
  }

  /** Button Owner */
  .header__owner button {
    display: block;
    font-size: 26px;
  }

  /** MEDIA */
  @media screen and (max-width: 450px) {
    .header__inner {
      padding-left: 15px;
      padding-right: 5px;
    }
  }
</style>