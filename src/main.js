// import { createApp } from 'vue'
// import { createApp } from '../node_modules/vue'
// import App from './App.vue'
// import './index.css'

import helloworld from './components/helloworld.js'
import './components/HelloWorld.vue'

const app = Vue.createApp({
  data() {
    return {
      message: 'Nguyen Van A'
    }
  }
})
// app.component('hello', helloworld )
app.mount('#rubydurian-app')
console.log('foooo2')
