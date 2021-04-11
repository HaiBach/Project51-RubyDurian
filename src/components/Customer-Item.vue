<template>
<div class="du-customer-item du-w-1/4 du-p-5">
  <div class="du-customer-item__inner du-overflow-hidden du-flex du-px-5 du-py-2.5 du-rounded-lg du-border-2 du-border-solid du-border-yellow-500 du-bg-yellow-100">

    <div class="du-customer-item__left du-pr-5">
      <img :src="urlAvatar" alt="Avatar" class="du-w-20 du-rounded-full">
    </div>
    <div class="du-customer-item__right du-flex-1 du-relative">
      <div class="du-customer-item__icon du-absolute du-rounded-full du-bg-black du-text-yellow-400">
        <i class="du-icon-crown"></i>
      </div>

      <div class="du-customer-item__name du-pr-10"><strong>Gabriel Armstrong</strong></div>
      <div class="du-customer-item__birthday">21 Nov, 1982</div>
      <div class="du-customer-item__gender">Male</div>
      <div class="du-customer-item__email">gabriel.armstrong@gmail.com</div>
      <div class="du-customer-item__footer du-flex du-items-center du-pt-2.5 du-mt-2.5 du-border-t du-border-dashed du-border-gray-400">
        <div class="du-customer-item__allcost du-pr-4 du-opacity-80">
          <span>$10.000</span>
          <i class="du-icon-cash-stack du-pl-1.5"></i>
        </div>
        <div class="du-customer-item__return du-pr-4 du-opacity-80">
          <span>50</span>
          <i class="du-icon-arrow-clockwise du-pl-1.5"></i>
        </div>
        <div class="du-customer-item__booking du-pr-4 du-opacity-80">
          <span>12</span>
          <i class="du-icon-calendar-event du-pl-1.5"></i>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      urlAvatar: window.rubydurianVA.urlPlugin + '/public/face/face01.png',
    }
  }
}
</script>

<style scoped>
  .du-customer-item__icon {
    top: -3px;
    right: -8px;
    padding: 5px;
    font-size: 9px;
  }
  .du-customer-item__footer {
    font-size: 11px;
  }
</style>