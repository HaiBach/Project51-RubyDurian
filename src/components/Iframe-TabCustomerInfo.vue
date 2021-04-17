<template>
  <h1>CUSTOMER INFO</h1>
  <div class="tab tab__time">
    <div class="tab__inner du-flex du-flex-col du-px-10 du-pt-5">
      <div class="pick-date du-flex du-justify-center">
        <div class="du-p-2.5 du-rounded-md">Today &nbsp; &nbsp; 07 Dec - 13 Dec &nbsp;</div>
      </div>
      <div class="calendar du-mb-10">
        <div class="calendar__header du-pt-2.5">
          <ul class="du-flex du-border-b du-border-gray-500">
            <li class="du-p-1.5 du-text-center du-text-xs">Mon</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Tue</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Wed</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Thu</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Fri</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Sat</li>
            <li class="du-p-1.5 du-text-center du-text-xs">Sun</li>
          </ul>
        </div>
        <div class="calendar__weeks">
          <div class="calendar__week week__1">
            <ul class="du-flex du-border-b du-border-gray-500">
              <li class="du-inactive">30</li>
              <li class="">1</li>
              <li class="">2</li>
              <li class="">3</li>
              <li class="">4</li>
              <li class="">5</li>
              <li class="">6</li>
            </ul>
          </div>
          <div class="calendar__week week__2">
            <ul class="du-flex du-border-b du-border-gray-500">
              <li class="">7</li>
              <li class="">8</li>
              <li class="">9</li>
              <li class="">10</li>
              <li class="">11</li>
              <li class="">12</li>
              <li class="">13</li>
            </ul>
          </div>
          <div class="calendar__week week__3">
            <ul class="du-flex du-border-b du-border-gray-500">
              <li class="">14</li>
              <li class="">15</li>
              <li class="">16</li>
              <li class="">17</li>
              <li class="">18</li>
              <li class="">19</li>
              <li class="">20</li>
            </ul>
          </div>
          <div class="calendar__week week__4">
            <ul class="du-flex du-border-b du-border-gray-500">
              <li class="">21</li>
              <li class="">22</li>
              <li class="">23</li>
              <li class="">24</li>
              <li class="">25</li>
              <li class="">26</li>
              <li class="">27</li>
            </ul>
          </div>
          <div class="calendar__week week__5">
            <ul class="du-flex du-border-b du-border-gray-500">
              <li class="">28</li>
              <li class="">29</li>
              <li class="">30</li>
              <li class="">31</li>
              <li class="du-inactive">1</li>
              <li class="du-inactive">2</li>
              <li class="du-inactive">3</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    }
  }
}
</script>


<style scoped>
  /** Calendar */
  .calendar {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .calendar__header li {
    width: 14.28%;
    color: #4B5563;
  }
  .calendar__week li {
    width: 14.28%;
    padding: 16px;
    border-right: 1px solid #6B7280;
    font-weight: 500;
    text-align: center;
  }
  .calendar__week li:last-child {
    border-right-width: 0;
    color: #9CA3AF;
    font-weight: 400;
  }
  .calendar__week li.du-inactive {
    color: #9CA3AF;
    font-weight: 400;
  }
</style>