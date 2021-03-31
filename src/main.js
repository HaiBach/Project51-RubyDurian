// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

import helloworld from './components/helloworld.js'
// import './components/HelloWorld.vue'

/** ĐIỀU KIỆN THỰC HIỆN */
const rubydurianVA = window['rubydurianVA']
console.log(rubydurianVA)
// if (!rubydurianVA) return null

const options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {
    const res = await fetch(url);
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return await res.text();
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
}
const { loadModule } = window['vue3-sfc-loader']
const greeting = loadModule(rubydurianVA['urlPlugin'] + '/src/components/greeting.vue', options)


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


/** APP MOUNT */
app.mount('#rubydurian-app')
// const foo = Vue.defineAsyncComponent( () => loadModule('./components/HelloWorld.vue', options) )
console.log('foooo2')
