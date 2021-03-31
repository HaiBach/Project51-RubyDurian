// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

/** IMPORT FILE */
import helloworld from './components/helloworld.js'

/** ĐIỀU KIỆN THỰC HIỆN */
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

// Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]

// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

const { createApp, h } = Vue

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes = {
  '/wp-admin/admin.php': HomeComponent,
  '/about': AboutComponent
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },
  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#rubydurian-app')


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
