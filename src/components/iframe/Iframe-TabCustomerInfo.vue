<template>
  <div class="tab tab__customer">
    <div class="tab__inner du-flex du-flex-col du-px-10 du-pt-5">

      <!-- Tab Header -->
      <div class="tab__header">
        <div class="tab__name du-my-4 du-text-center">
          <h4>Hi Nguyen Van A</h4>
          <p class="du-text-gray-400">Please review your infomation</p>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab__content du-mt-4 du-mb-8">
        <div class="tab__txt">
          <h2>Nguyen Van A</h2>
          <p>vana.nguyen@gmail.com<br>
            +1 (808)-216-5195<br>
            25  Emma Street, Hawaii State, Moanalua City - 96819
          </p>
        </div>
        <div class="tab__btn du-mt-3">
          <a href="#" class="btn-update-profile du-inline-block du-px-5 du-py-2 du-rounded-md du-bg-gray-100 du-text-gray-600 hover:du-bg-gray-700 hover:du-text-white">
            <i class="icon-pencil"></i><span class="btn__text">Update Profile</span>
          </a>
        </div>
      </div>

      <!-- Tab Footer -->
      <div class="tab__footer du-pt-8 du-mb-8 du-border-t du-border-gray-300 du-text-gray-500 du-text-center">
        <p class="du-text-sm">No cancellation or rescheduling is permitted within 24 hour(s) of the appointment time</p>
        <div class="form du-flex du-justify-center du-items-center du-mt-2.5">
          <div class="input-policy">
            <input type="checkbox" id="agree-private-policy" class="du-absolute du-invisible">
            <label for="agree-private-policy" class="du-relative du-block du-text-sm">I agree to the <u>cancellation policy</u></label>
          </div>
        </div>
      </div>

    </div>

    <Footer to="/summary"></Footer>
  </div>
</template>


<script>
import Footer from './Iframe-Footer.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    Footer,
  }
}
</script>


<style scoped>
  .tab__inner {
    width: 680px;
    margin-left: auto;
    margin-right: auto;
  }
  .tab__txt h2 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 700;
  }
  .tab__txt p {
    color: #6B7280;
  }

  /** Button Update Profile */
  .btn-update-profile {
    font-size: 14px;
    line-height: 1.6;
  }

  /** Form */
  label {
    padding-left: 35px;
    line-height: 22px;
    cursor: pointer;
  }
  label::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 2px solid #6B7280;
    background-color: #fff;
    transition: background-color 0.2s;
  }
  label::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  input[type="checkbox"]:checked + label::before {
    border-color: #F59E0B;
    /* background-color: #FEF3C7; */
  }
</style>