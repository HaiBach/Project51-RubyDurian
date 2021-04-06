/**
 * COMPONENTS
 */
const rubydurianVA = window['rubydurianVA']
const urlPlugin = !!rubydurianVA ? rubydurianVA['urlPlugin'] : ''
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
const Home = loadModule('/src/components/Home.vue', options)






const NotFoundComponent = { template: '<h2 style="font-size: 4em">Page not found</h2>' }
// const HomeComponent = { template: '<h2 style="font-size: 4em">Home page</h2>' }
const HomeComponent = Vue.defineAsyncComponent(() => Home)
const CalendarComponent = { template: '<h2 style="font-size: 4em">Calendar page</h2>' }
const OptionsComponent = { template: '<h2 style="font-size: 4em">Options page</h2>' }





/**
 * ROUTES
 */
export default [
  {
    name: 'Home',
    path: "/admin.php",
    component: HomeComponent
  },
  {
    name: 'Calendar',
    path: "/admin.php?page=rubydurian-calendar",
    component: CalendarComponent
  },
  {
    name: 'Options',
    path: "/admin.php?page=rubydurian-options",
    component: OptionsComponent
  },
]