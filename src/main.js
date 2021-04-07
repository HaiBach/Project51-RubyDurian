// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

/** IMPORT FILE */
import helloworld from './components/helloworld.js'

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
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + fullURL), { res })
    return await res.text();
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent })
    const ref = document.head.getElementsByTagName('style')[0] || null
    document.head.insertBefore(style, ref)
  },
}
const { loadModule } = window['vue3-sfc-loader']
const Dashboard = loadModule('/src/components/Dashboard.vue', options)
const Navigation = loadModule('/src/components/Navigation.vue', options)





/**
 * COMPONENTS
 */
// const { createApp, h } = Vue

const components = {
  Dashboard: () => Dashboard,
  Calendar: { template: '<h2 style="font-size: 4em">Calendar page</h2>' },
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
  // history: VueRouter.createWebHistory(),
  routes,
  linkActiveClass: 'du-active'
})

// Hàm chuyển đổi route
// Kiểm query param `page`
// Chuyển thành route có dạng `next({ name: 'Calendar' })`
router.beforeEach((to, from, next) => {
  const fullname = to.query.page
  const names = !!fullname ? fullname.split('-') : []

  if ( names.length > 1 ) {
    const lastname = names[1]
    const nameCapitalize = lastname.charAt(0).toUpperCase() + lastname.slice(1)
    next({ name: nameCapitalize })
  }
  else if (names.length === 1) {
    next({ name: 'Dashboard' })
  }
  else next()
})





/**
 * CREATE NEW APP
 */
const App = {
  // data() {
  //   return {
  //     navigation: {
  //       top: [
  //         { name: 'Dashboard', icon: 'du-icon-home' },
  //         { name: 'Calendar', icon: 'du-icon-calendar' },
  //         { name: 'Customers', icon: 'du-icon-people' },
  //         { name: 'Staffs', icon: 'du-icon-badge' },
  //         { name: 'Services', icon: 'du-icon-checklist' },
  //       ],
  //       bottom: [
  //         { name: 'Options', icon: 'du-icon-gear' },
  //       ]
  //     }
  //   }
  // }
  components: {
    Navigation: Vue.defineAsyncComponent( () => Navigation ),
    // Dashboard: Vue.defineAsyncComponent( () => Dashboard ),
  }
}
const app = Vue.createApp(App)
app.use(router)
app.mount('#rubydurian-app')
console.log('Finish Create New App')