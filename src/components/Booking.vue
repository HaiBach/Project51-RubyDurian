<template>
  <!-- HEADER -->
  <Header :title="title"></Header>

  <!-- <div id="rubydurian-maincontent" class="du-p-2.5"> -->
    <div id="rubydurian-week">
      <div id="du-week__header">
        <ul class="du-flex">
          <li>Mon 23</li>
          <li>Tue 24</li>
          <li>Wed 25</li>
          <li>Thu 26</li>
          <li>Fri 27</li>
          <li>Sat 28</li>
          <li>Sun 29</li>
        </ul>
      </div>
      <div id="du-week__content">
        <div id="du-week__left">
          <ul>
            <li>08:00</li>
            <li>09:00</li>
            <li>10:00</li>
            <li>11:00</li>
            <li>12:00</li>
            <li>13:00</li>
            <li>14:00</li>
            <li>15:00</li>
            <li>16:00</li>
            <li>17:00</li>
            <li>18:00</li>
          </ul>
        </div>
        <div id="du-week__right" :style="bgPattern">
          <div class="du-week__day du-week__mon">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__tue">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__wed">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__thu">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__fri">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__sat du-week__holiday">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
          <div class="du-week__day du-week__sun du-week__holiday">
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
            <div class="du-week__hour"></div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>


<script>
/** IMPORT */
import Header from './Header.vue'


/** EXPORT */
module.exports = {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
      title: 'Booking',
    }
  },
  components: {
    Header,
  },
  computed: {
    bgPattern() {
      return {
        'background-image': `url(${this.urlPlugin}/src/images/pattern-line1-opacity25.png)`
      }
    }
  }
};
</script>


<style scoped>
  #du-week__header {
    padding-left: 50px;
    padding-top: 50px;
  }
  #du-week__header ul {
    display: flex;
    border-bottom: 1px solid #777;
  }
  #du-week__header li {
    width: 14.2%;
    padding: 4px;
    margin-bottom: 0;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #222;
    text-align: center;
  }
  #du-week__content {
    display: flex;
  }
  #du-week__left {
    width: 50px;
  }
  #du-week__left li {
    margin-bottom: 0;
    height: 75px;
    padding: 0 5px;
    color: #777;
    font-size: 11px;
    text-align: right;
  }
  #du-week__right {
    display: flex;
    flex: 1;
  }
  .du-week__day {
    width: 14.2%;
    border-left: 1px solid #d2d2d2;
    background-color: #fff;
  }
  .du-week__day:first-child {
    border-left-color: #777;
  }
  .du-week__holiday {
    background-color: transparent;
  }
  .du-week__holiday .du-week__hour {
    border-bottom-color: transparent;
  }
  .du-week__sun {
    border-left-color: transparent;
  }
  .du-week__hour {
    height: 75px;
    border-bottom: 1px solid #d2d2d2;
  }
</style>