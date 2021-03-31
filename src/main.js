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
const HelloWorld = loadModule('/src/components/HelloWorld.vue', options)


/** CREATE NEW APP */
const app = Vue.createApp({
  data() {
    return {
      message: 'Nguyen Van A'
    }
  }
})


/** APP COMPONENTS */
app.component('hello', helloworld )
app.component('greeting', Vue.defineAsyncComponent( () => greeting ))
app.component('HelloWorld', Vue.defineAsyncComponent( () => HelloWorld ))


/** APP MOUNT */
app.mount('#rubydurian-app')
console.log('Create New App')
