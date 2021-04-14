<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <div id="rubydurian-maincontent" class="du-px-10 du-py-10 du-mt-14">
    <div class="du-tabs du-flex">
      <div class="du-tabs__pag du-w-60">
        <ul>
          <li><a href="#" title="Setting">Setting 1</a></li>
          <li><a href="#" title="Setting" class="du-active">Setting 2</a></li>
          <li><a href="#" title="Setting">Setting 3</a></li>
          <li><a href="#" title="Setting">Setting 4</a></li>
          <li><a href="#" title="Setting">Setting 5</a></li>
        </ul>
      </div>
      <div class="du-tabs__content du-flex-1">
        <div class="du-tabs__item">
          <ul class="du-flex du-flex-col">
            <li
              v-for="item in list"
              :key="item.key"
              class="du-m-0">
              <div class="item__inner du-p-6 du-m-2 du-bg-gray-100 du-text-gray-600 du-rounded-md">
                {{ item.text }}
              </div>
            </li>
          </ul>
        </div>

        <div class="du-tabs__item">
          <ul class="du-flex du-flex-col">
            <li
              v-for="item in list"
              :key="item.key"
              class="du-m-0">
              <div class="item__inner du-p-6 du-m-2 du-bg-gray-100 du-text-gray-600 du-rounded-md">
                {{ item.text }}
              </div>
            </li>
          </ul>
        </div>

        <div class="du-tabs__item">
          <ul class="du-flex du-flex-col">
            <li
              v-for="item in list"
              :key="item.key"
              class="du-m-0">
              <div class="item__inner du-p-6 du-m-2 du-bg-gray-100 du-text-gray-600 du-rounded-md">
                {{ item.text }}
              </div>
            </li>
          </ul>
        </div>

        <div class="du-tabs__item">
          <ul class="du-flex du-flex-col">
            <li
              v-for="item in list"
              :key="item.key"
              class="du-m-0">
              <div class="item__inner du-p-6 du-m-2 du-bg-gray-100 du-text-gray-600 du-rounded-md">
                {{ item.text }}
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>
/** IMPORT */
import Header from './Header.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      title: 'Options',
      list: [
        { key: 0, text: 'The block is currently under construction' },
        { key: 1, text: 'The block is currently under construction' },
        { key: 2, text: 'The block is currently under construction' },
        { key: 3, text: 'The block is currently under construction' },
        { key: 4, text: 'The block is currently under construction' },
        { key: 5, text: 'The block is currently under construction' },
        { key: 6, text: 'The block is currently under construction' },
        { key: 7, text: 'The block is currently under construction' },
        { key: 9, text: 'The block is currently under construction' },
      ]
    }
  },
  components: {
    Header,
  },
};
</script>


<style scoped>
  .du-tabs__pag {
    padding-right: 5px;
    /* border-right: 1px solid #ddd; */
  }
  .du-tabs__pag ul {
    /* border-top: 1px solid #ddd; */
  }
  .du-tabs__pag li {
    margin-bottom: 0;
  }
  .du-tabs__pag a {
    display: block;
    padding: 10px 20px;
    margin-bottom: 5px;
    border-radius: 6px;
    background-color: #F3F4F6;
    /* border-bottom: 1px solid #ddd; */
  }
  .du-tabs__pag a:hover {
     background-color: #D1D5DB
  }
  .du-tabs__pag a.du-active {
     background-color: #FBBF24;
     color: #000;
  }

  .du-tabs__content {
    max-width: 900px;
    padding-left: 20px;
  }
  .du-tabs__item {

  }
</style>