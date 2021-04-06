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
const Home = loadModule('/src/components/Home.vue', options)





/**
 * COMPONENTS
 */
// const { createApp, h } = Vue

// const NotFoundComponent = { template: '<p>Page not found</p>' }
// const HomeComponent = { template: '<p>Home page</p>' }
// const HomeComponent = Vue.defineAsyncComponent(() => Home)
// const CalendarComponent = { template: '<p>Calendar page</p>' }
// const OptionsComponent = { template: '<p>Options page</p>' }

const components = {
  HomeComponent: () => Home,
  CalendarComponent:{ template: '<h2 style="font-size: 4em">Calendar page</h2>' },
  OptionsComponent: { template: '<h2 style="font-size: 4em">Options page</h2>' },
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
  routes
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
  else next()
})





/**
 * CREATE NEW APP
 */
const app = Vue.createApp({})
app.use(router)
app.mount('#rubydurian-app')
console.log('Finish Create New App')