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
const Iframe = loadModule('src/FrontEnd-Iframe.vue', options)





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
app.mount('#rubydurian-app')