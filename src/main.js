// import { createApp } from 'vue'
// import App from './App.vue'

/** IMPORT FILE */
// import helloworld from './components/helloworld.js'

// Lấy tham số `page` trên url
// const urlParams = new URLSearchParams(window.location.search)
// const paramPage = urlParams.get('page')






/**
 * LOAD MODULES
 * Import file `*.vue`
 */
const rubydurianVA = window['rubydurianVA']
const urlPlugin = !!rubydurianVA ? rubydurianVA['urlPlugin'] : ''
// if (!rubydurianVA) return null

const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {
    const fullURL = urlPlugin + url
    const res = await fetch(fullURL)
    if ( !res.ok ) {
      throw Object.assign(new Error(res.statusText + ' ' + fullURL), { res })
    }
    return await res.text();
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent })
    const ref = document.head.getElementsByTagName('style')[0] || null
    document.head.insertBefore(style, ref)
  },
}
const { loadModule } = window['vue3-sfc-loader']
const Navigation = loadModule('/src/components/Navigation.vue', options)
const Dashboard = loadModule('/src/components/Dashboard.vue', options)
const Booking = loadModule('/src/components/Booking.vue', options)






/**
 * COMPONENTS
 */
// const { createApp, h } = Vue

const components = {
  Dashboard: () => Dashboard,
  Booking: () => Booking,
  BookingCreate: () => Booking,
  Customers: { template: '<h2 style="font-size: 4em">Customers page</h2>' },
  Staffs: { template: '<h2 style="font-size: 4em">Staffs page</h2>' },
  Services: { template: '<h2 style="font-size: 4em">Services page</h2>' },
  Options: { template: '<h2 style="font-size: 4em">Options page</h2>' },
}





/**
 * ROUTES
 * Chuyển đổi string component thành đối tượng component
 */
import routesJSON from './routes.js'
const routes = routesJSON.map(route => (
  {
    name: route['name'],
    path: route['path'],
    component: components[ route['component'] ]
  }
))





/**
 * ROUTER
 */
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/wp-admin/'),
  routes,
  linkActiveClass: 'du-active'
})
let isFirstGo = false

// Hàm chuyển đổi route
// Kiểm query param `page`
// Chuyển thành route có dạng `next({ name: 'Booking' })`

// router.beforeEach((to, from, next) => {
//   const fullname = to.query.page
//   const names = !!fullname ? fullname.split('-') : []
//   console.log(names.length)

//   if ( names.length > 1 ) {
//     const lastname = names[1]
//     const nameCapitalize = lastname.charAt(0).toUpperCase() + lastname.slice(1)
//     console.log(nameCapitalize)
//     next({ name: nameCapitalize })
//   }
//   else if (names.length === 1) {
//     next({ name: 'Dashboard' })
//   }
//   else next()
// })

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  const query = to.query

  // Chỉ thiết lập khi click vào đường link menu wordpress
  if (!isFirstGo) {
    isFirstGo = true
    const names = !!query.page ? query.page.split('rubydurian-') : []
    console.log(names.length, query.page)

    if (names.length > 1) {
      const lastname = names[1]
      const nameCapitalize = lastname.charAt(0).toUpperCase() + lastname.slice(1)
      next({ name: nameCapitalize, query: to.query })
    }
    else {
      next({ name: 'Dashboard', query: to.query })
    }
  }
  else next()
})





/**
 * CREATE NEW APP
 */
const App = {
  // data() {
  //   return {
  //     title: ''
  //   }
  // },
  components: {
    'Navigation': Vue.defineAsyncComponent( () => Navigation ),
    // 'DuNavigation': Vue.defineAsyncComponent( () => Navigation ),
    // MyHeader: { template: '<h2 style="font-size: 4em">Header</h2>' },
  },
  // methods: {
    // currentRouteName() {
    //   console.log('current route name')
    // }
  // }
}
const app = Vue.createApp(App)
app.use(router)
app.mount('#rubydurian-app')
console.log('Finish Create New App')