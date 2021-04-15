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
            class="du-nav__link du-block du-p-2.5 du-mx-2.5 du-mb-2.5 du-rounded-md du-border du-border-transparent du-text-gray-500 du-text-center du-transition-colors hover:du-bg-gray-200 hover:du-text-black focus:du-shadow-none">
            <i class="du-icon__first" :class="route.icon"></i>
            <i class="du-icon__second du-text-gray-700" :class="route.iconActive"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="du-nav__bottom">
      <router-link
        v-for="route in navBottom"
        :key="route.name"
        :to="{ name: route.name, query: route.query }"
        class="du-nav__link du-block du-p-2.5 du-mx-2.5 du-mb-2.5 du-rounded-md du-border du-border-transparent du-text-gray-500 du-text-center du-transition-colors hover:du-bg-gray-200 hover:du-text-black focus:du-shadow-none">
        <i class="du-icon__first" :class="route.icon"></i>
        <i class="du-icon__second du-text-gray-700" :class="route.iconActive"></i>
      </router-link>
    </div>
  </nav>
</template>


<script>
import Logo from './Logo.vue'

export default {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      navTop: [
        { name: 'Dashboard', query: { page: 'rubydurian' }, icon: 'du-icon-house', iconActive: 'du-icon-house-fill' },
        { name: 'Booking', query: { page: 'rubydurian-booking' }, icon: 'du-icon-calendar2-week', iconActive: 'du-icon-calendar2-week-fill' },
        { name: 'Customers', query: { page: 'rubydurian-customers' }, icon: 'du-icon-people-2', iconActive: 'du-icon-people-fill' },
        { name: 'Staffs', query: { page: 'rubydurian-staffs' }, icon: 'du-icon-badge', iconActive: 'du-icon-person-fill' },
        { name: 'Services', query: { page: 'rubydurian-services' }, icon: 'du-icon-checklist', iconActive: 'du-icon-checklist-fill' },
      ],
      navBottom: [
        { name: 'Options', query: { page: 'rubydurian-options' }, icon: 'du-icon-gear', iconActive: 'du-icon-gear-fill' },
      ]
    }
  },
  components: {
    Logo,
  }
}
</script>


<style scoped>
  /** Navigation */
  nav {
    min-height: calc(100% - 32px);
  }

  /** Link */
  .du-nav__link {
    font-size: 26px;
  }
  .du-nav__link.du-active {
    background-color: #D1D5DB;
    color: #000;
    /* border: 1px solid #9CA3AF; */
  }
  .du-nav__link .du-icon__second {
    display: none;
  }
  .du-nav__link.du-active .du-icon__first {
    display: none;
  }
  .du-nav__link.du-active .du-icon__second {
    display: inline-block;
  }
</style>