<template>
  <div class="tab tab__success">
    <div class="tab__inner du-flex du-justify-center du-items-center du-px-10 du-py-10">
      
      <!-- Message -->
      <div class="message du-px-10 du-py-7 du-rounded-2xl du-bg-gray-100 du-border du-border-gray-300">
        <div class="message__icon du-mb-5 du-text-center">
          <i class="du-icon-check-circle"></i>
        </div>
        <div class="message__text du-mb-7">
          <p class="du-mb-5 du-leading-5 du-text-center du-text-gray-800">Congratulation,<br>
            You have successfully registered<br>
            appointment!<br>
          </p>
        </div>
        <div class="message__btn">
          <router-link to="/" class="message__link du-block du-w-64 du-px-5 du-py-2.5 du-mx-auto du-rounded-lg du-bg-yellow-400 du-text-gray-800 du-text-sm du-text-center hover:du-bg-yellow-700 hover:du-text-white">Finish</router-link>
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
  .tab__inner {
    min-height: calc(100vh - 48px);
  }

  /** Message */
  .message {
    width: 450px;
  }
  .message__icon i {
    font-size: 96px;
  }
</style>