// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

/** IMPORT FILE */
import helloworld from './components/helloworld.js'
// import routes from './routes.js'






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
    const res = await fetch(fullURL);
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + fullURL), { res });
    return await res.text();
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
}
const { loadModule } = window['vue3-sfc-loader']
const greeting = loadModule('/src/components/greeting.vue', options)
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
  HomeComponent: Vue.defineAsyncComponent(() => Home),
  CalendarComponent:{ template: '<h2 style="font-size: 4em">Calendar page</h2>' },
  OptionsComponent: { template: '<h2 style="font-size: 4em">Options page</h2>' },
}





/**
 * ROUTES
 */
import routesJSON from './routes.js'
const routes = routesJSON.map(route => (
  {
    name: route['name'],
    path: route['path'],
    component: components[ route['component'] ]
  }
))
// Lấy tham số `page` trên url
// const urlParams = new URLSearchParams(window.location.search)
// const paramPage = urlParams.get('page')

// const routes = {
//   'rubydurian': HomeComponent,
//   'rubydurian-calendar': CalendarComponent,
//   'rubydurian-options': OptionsComponent
// }
// const routes = [
//   { path: "/admin.php", name: 'home', query: { page: 'rubydurian'}, component: HomeComponent },
//   { path: "/admin.php", name: 'calendar', query: { page: 'rubydurian-calendar'}, component: CalendarComponent },
//   { path: "/admin.php", name: 'options', query: { page: 'rubydurian-options'}, component: OptionsComponent },

//   // { query: { page: 'rubydurian' }, component: HomeComponent },
//   // { query: { page: 'rubydurian-calendar' }, component: CalendarComponent },
//   // { query: { page: 'rubydurian-options' }, component: OptionsComponent },
//   // { href: '/wp-admin/admin.php?page=rubydurian', component: HomeComponent },
//   // { href: '/wp-admin/admin.php?page=rubydurian-calendar', component: CalendarComponent },
//   // { href: '/wp-admin/admin.php?page=rubydurian-options', component: OptionsComponent },
// ]






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
// const SimpleRouter = {
//   data: () => ({
//     currentRoute: paramPage
//   }),
//   computed: {
//     CurrentComponent() {
//       return routes[this.currentRoute] || NotFoundComponent
//     }
//   },
//   render() {
//     return Vue.h(this.CurrentComponent)
//   }
// }

// const app = Vue.createApp(SimpleRouter)
// app.mount('#rubydurian-app')
const app = Vue.createApp({})
app.use(router)
app.mount('#rubydurian-app')


/** CREATE NEW APP */
// const app = Vue.createApp({
//   data() {
//     return {
//       message: 'Nguyen Van A'
//     }
//   }
// })
// const app = Vue.createApp({ router })


/** APP COMPONENTS */
// app.component('hello', helloworld )
// app.component('greeting', Vue.defineAsyncComponent( () => greeting ))


/** APP MOUNT */
// app.mount('#rubydurian-app')
console.log('Create New App')
