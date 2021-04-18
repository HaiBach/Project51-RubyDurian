<template>
  <h1>SHOP</h1>
  <div class="tab tab__time">
    <div class="tab__inner du-flex du-flex-col du-px-10 du-pt-5">
      <div class="pick-date du-flex du-justify-center">
        <div class="du-p-2.5 du-rounded-md">Today &nbsp; &nbsp; 07 Dec - 13 Dec &nbsp;</div>
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