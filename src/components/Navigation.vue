<template>
  <nav id="rubydurian-nav" class="du-flex du-flex-col du-justify-between du-w-24 du-bg-gray-100">
    <div class="du-nav__top">
      <!-- Logo -->
      <Logo></Logo>

      <ul class="du-flex du-flex-col">
        <li
          v-for="route in navTop"
          :key="route.name"
          class="du-block du-mb-0"
          >
          <router-link :to="{ name: route.name }"
            class="du-nav__link du-block du-p-2.5 du-m-2.5 du-rounded-md du-text-gray-500 du-text-2xl du-text-center hover:du-text-black focus:du-shadow-none">
            <i :class="route.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="du-nav__bottom">
      <router-link :to="{ name: 'Options' }"
        class="du-nav__link du-block du-p-2.5 du-m-2.5 du-rounded-md du-text-gray-500 du-text-2xl du-text-center hover:du-text-black focus:du-shadow-none">
        <i class="du-icon-gear"></i>
      </router-link>
    </div>
  </nav>
</template>


<script>
import Logo from './Logo.vue'

module.exports = {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      navTop: [
        { name: 'Dashboard', icon: 'du-icon-home' },
        { name: 'Booking', icon: 'du-icon-calendar' },
        { name: 'Customers', icon: 'du-icon-people' },
        { name: 'Staffs', icon: 'du-icon-badge' },
        { name: 'Services', icon: 'du-icon-checklist' },
      ],
      navBottom: [
        { name: 'Options', icon: 'du-icon-gear' },
      ]
    }
  },
  components: {
    Logo
  }
}
</script>


<style scoped>
  .du-nav__logo img {
    width: 62px;
    height: auto;
  }
  .du-nav__link.du-active {
    background-color: #DADADA;
    color: #000;
  }
</style>