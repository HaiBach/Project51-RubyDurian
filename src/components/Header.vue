<template>
  <header class="du-fixed du-h-14 du-flex du-justify-between du-items-center du-px-10 du-border-b">
    <div class="du-header__left">
      <h2 class="du-text-xl du-font-bold">{{ title }}</h2>
    </div>
    <div class="du-header__right du-flex du-items-center">
      <div class="du-header__store du-ml-3">
        <div class="du-form-select">
          <form action="">
            <select
              id="du-form__store"
              name="store"
              class="du-form__store"
              >
              <option value="all-store">-- All Stores --</option>
              <option value="store-1">Store 1</option>
              <option value="store-2">Store 2</option>
              <option value="store-3">Store 3</option>
              <option value="store-4">Store 4</option>
            </select>
          </form>
        </div>
      </div>
      <div class="du-header__notification du-relative du-ml-2">
        <button class="du-px-4 du-py-2.5 du-rounded du-text-gray-500 du-text-lg du-leading-3 hover:du-text-black focus:du-outline-none">
          <i class="du-icon-bell"></i>
        </button>
        <div class="du-notification__count">12</div>
      </div>
      <div class="du-header__owner du-ml-2">
        <button
          class="du-px-4 du-py-2.5 du-rounded du-text-gray-500 du-text-lg du-leading-3 hover:du-text-black focus:du-outline-none"
          ><i class="du-icon-person"></i></button>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  props: ['title'],
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  }
}
</script>


<style scoped>
  header {
    width: calc(100% - 256px);
    border-color: rgba(0,0,0,0.15);
    background-color: rgba(255,255,255, 0.75);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: 9;
  }
  body.folded header {
    width: calc(100% - 132px);
  }

  #du-form__store {
    min-width: 150px;
    padding: 3px 36px 3px 15px;
    border-radius: 6px;
    background: #fbbf24 url("data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOC43cHgiIGhlaWdodD0iNS42cHgiIHZpZXdCb3g9IjAgMCA4LjcgNS42IiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDguNyA1LjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtvcGFjaXR5OjAuNTt9DQo8L3N0eWxlPg0KPGRlZnM+DQo8L2RlZnM+DQo8cGF0aCBpZD0iRmlsbF8xXzFfIiBjbGFzcz0ic3QwIiBkPSJNMy44LDUuNEwwLjIsMS4yYy0wLjMtMC4zLTAuMi0wLjgsMC4xLTEuMUMwLjQsMC4xLDAuNiwwLDAuNywwaDcuMmMwLjQsMCwwLjgsMC4zLDAuOCwwLjcgYzAsMC4yLTAuMSwwLjQtMC4yLDAuNUw0LjksNS40QzQuNiw1LjcsNC4yLDUuNywzLjgsNS40QzMuOSw1LjQsMy45LDUuNCwzLjgsNS40QzMuOCw1LjQsMy44LDUuNCwzLjgsNS40TDMuOCw1LjR6Ii8+DQo8L3N2Zz4NCg==") no-repeat right 10px top 55%;
    border-color: #fbbf24;
    color: #000;
  }
  #du-form__store:focus {
    box-shadow: none;
  }
  #du-form__store option {
    background-color: #fff;
  }

  /** NOTIFICATION */
  .du-notification__count {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #EF4444;
    color: #fff;
    font-size: 8px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.5px;
  }
</style>