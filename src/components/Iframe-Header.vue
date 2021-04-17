<template>
  <header class="du-fixed du-top-0 du-left-0 du-w-full du-h-12">
    <div class="header__inner du-flex du-justify-between du-items-center du-px-5 du-h-12">
      <div class="header__control">
        <button class="header__back du-visible du-block du-w-14 du-p-2.5 du-rounded-md du-bg-white du-text-xs du-text-center" @click="$router.back()">
          <i class="du-icon-back du-block"></i>
        </button>
      </div>
      <div class="header__title">
        <h1 class="du-text-lg du-font-bold du-text-gray-800 du-tracking-wider">{{ getTitle() }}</h1>
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
        '/service': '3. SERVICE',
        '/staff': '4. STAFF',
        '/sign-in': '5. SIGN IN',
        '/customer-info': '6. CUSTOMER INFOMATION',
        '/summary': '7. SUMMARY',
        '/success': '8. SUCCESS',
      }
    }
  },
  computed: {
    // getTitle() {
    // }
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
  .header__inner {
    background-color: #eee;
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
</style>