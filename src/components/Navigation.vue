<template>
  <nav id="rubydurian-nav" class="du-fixed du-flex du-flex-col du-justify-between du-w-24 du-bg-gray-100">
    <div class="du-nav__top">
      <!-- Logo -->
      <Logo></Logo>

      <ul class="du-flex du-flex-col">
        <li
          v-for="route in navTop"
          :key="route.name"
          class="du-block du-mb-0"
          >
          <router-link :to="{ name: route.name, query: route.query }"
            class="du-nav__link du-block du-p-2.5 du-m-2.5 du-rounded-md du-text-gray-500 du-text-2xl du-text-center hover:du-text-black focus:du-shadow-none">
            <i :class="route.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="du-nav__bottom">
      <router-link
        v-for="route in navBottom"
        :key="route.name"
        :to="{ name: route.name, query: route.query }"
        class="du-nav__link du-block du-p-2.5 du-m-2.5 du-rounded-md du-text-gray-500 du-text-2xl du-text-center hover:du-text-black focus:du-shadow-none">
        <i :class="route.icon"></i>
      </router-link>
    </div>
  </nav>
</template>


<script setup>
import Logo from './Logo.vue'

module.exports = {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      navTop: [
        { name: 'Dashboard', query: { page: 'rubydurian' }, icon: 'du-icon-home' },
        { name: 'Booking', query: { page: 'rubydurian-booking' }, icon: 'du-icon-calendar' },
        { name: 'Customers', query: { page: 'rubydurian-customers' }, icon: 'du-icon-people-2' },
        { name: 'Staffs', query: { page: 'rubydurian-staffs' }, icon: 'du-icon-badge' },
        { name: 'Services', query: { page: 'rubydurian-services' }, icon: 'du-icon-checklist' },
      ],
      navBottom: [
        { name: 'Options', query: { page: 'rubydurian-options' }, icon: 'du-icon-gear' },
      ]
    }
  },
  components: {
    Logo
  }
}
</script>


<style scoped>
  .du-nav__link.du-active {
    background-color: #DADADA;
    color: #000;
  }
  nav {
    min-height: calc(100% - 32px);
  }
</style>