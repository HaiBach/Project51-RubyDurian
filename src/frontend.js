/** IMPORT FILE */
// import './index.css'





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
 // Sử dụng `loadModule` để import components
 const { loadModule } = window['vue3-sfc-loader']
 const FrontEnd = loadModule('/src/Front-End.vue', options)
 
 
 
 
 
 /**
  * COMPONENTS
  */
 const components = {
   Dashboard: () => Dashboard,
   Booking: () => Booking,
   BookingCreate: () => Booking,
   Customers: () => Customers,
   Staffs: () => Staffs,
   Services: () => Services,
   Options: () => Options,
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
   history: VueRouter.createWebHistory('/'),
   routes,
   linkActiveClass: 'du-active'
 })
 
 // Biến nhận biết di chuyển bằng link menu wordpress
 let isFirstGo = false
 
 // Hàm chuyển đổi route
 router.beforeEach((to, from, next) => {
   const query = to.query
 
   // Chỉ thiết lập khi click vào đường link menu wordpress
   if (!isFirstGo) {
     isFirstGo = true
     const names = !!query.page ? query.page.split('rubydurian-') : []
 
     if (names.length > 1) {
       const lastname = names[1]
       const nameCapitalize = lastname.charAt(0).toUpperCase() + lastname.slice(1)
       next({ name: nameCapitalize, query: to.query })
     }
     else {
       next({ name: 'Dashboard', query: to.query })
     }
   }
   else {
     next()
   }
 })
 
 
 
 
 
/**
  * CREATE NEW APP
  */
const App = {
  data() {
    return {
      message: 'Xin chao moi nguoi 123'
    }
  },
  components: {
    FrontEnd: Vue.defineAsyncComponent( () => FrontEnd ),
    // FrontEnd: () => FrontEnd,
  },
}
const app = Vue.createApp(App)
app.mount('#rubydurian-app')