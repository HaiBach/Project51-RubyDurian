<template>
  <nav>
    Navigation
    <Navigation></Navigation>
  </nav>
  <main>
    <header>
      <h1>HOME PAGE</h1>
      Header
    </header>
    <div id="rubydurian-maincontent">
      Main Content
    </div>    
  </main>
</template>

<script>
// import defaultExport from './helloworld.js'
import Navigation from './Navigation.vue'


// const rubydurianVA = window['rubydurianVA']
// const urlPlugin = !!rubydurianVA ? rubydurianVA['urlPlugin'] : ''
// // if (!rubydurianVA) return null

// const options = {
//   moduleCache: {
//     vue: Vue
//   },
//   async getFile(url) {
//     const fullURL = urlPlugin + url
//     const res = await fetch(fullURL);
//     if ( !res.ok )
//       throw Object.assign(new Error(res.statusText + ' ' + fullURL), { res });
//     return await res.text();
//   },
//   addStyle(textContent) {
//     const style = Object.assign(document.createElement('style'), { textContent });
//     const ref = document.head.getElementsByTagName('style')[0] || null;
//     document.head.insertBefore(style, ref);
//   },
// }

// const { loadModule } = window['vue3-sfc-loader']
// const Navigation = loadModule('/Navigation.vue', options)

module.exports = {
  data() {
    return {
      greeting: "Xin chào mọi người"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>