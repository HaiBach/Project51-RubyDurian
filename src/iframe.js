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
const Iframe = loadModule('src/components/Iframe.vue', options)
const TabTime = loadModule('src/components/Iframe-TabTime.vue', options)
const TabShop = loadModule('src/components/Iframe-TabShop.vue', options)
const TabService = loadModule('src/components/Iframe-TabService.vue', options)
const TabStaff = loadModule('src/components/Iframe-TabStaff.vue', options)
const TabSignIn = loadModule('src/components/Iframe-TabSignIn.vue', options)
const TabCustomerInfo = loadModule('src/components/Iframe-TabCustomerInfo.vue', options)
const TabSummary = loadModule('src/components/Iframe-TabSummary.vue', options)
const TabSuccess = loadModule('src/components/Iframe-TabSuccess.vue', options)





// const Time = { template: '<div><h1>Time</h1></div>' }
// const Shop = { template: '<div><h1>Shop</h1></div>' }
const routes = [
  { path: '/', component: () => TabTime },
  { path: '/shop', component: () => TabShop },
  { path: '/service', component: () => TabService },
  { path: '/staff', component: () => TabStaff },
  { path: '/sign-in', component: () => TabSignIn },
  { path: '/customer-info', component: () => TabCustomerInfo },
  { path: '/summary', component: () => TabSummary },
  { path: '/success', component: () => TabSuccess },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})





/**
 * CREATE NEW APP
 */
const App = {
  template: `<Iframe></Iframe>`,
  data() {
    return {
      message: 'Xin chao moi nguoi 123'
    }
  },
  components: {
    Iframe: Vue.defineAsyncComponent( () => Iframe ),
  },
}
const app = Vue.createApp(App)
app.use(router)
app.mount('#rubydurian-app')