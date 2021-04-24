<template>
  <div class="tab tab__time">
    <div class="tab__inner du-flex du-flex-col du-justify-center du-items-center du-p-5">
      <div class="signin-form">

        <form action="">
          <div class="signin__email du-mb-2.5">
            <input type="email" name="email" value="" placeholder="Email">
          </div>
          <div class="signin__password du-mb-2.5">
            <input type="password" name="password" value="" placeholder="Password">
          </div>
          
          <!-- SIGN-IN SUBMIT -->
          <div class="signin__submit du-mb-2.5">
            <router-link to="/customer-info" class="signin__submit_link du-block du-px-5 du-py-2.5 du-rounded-lg du-bg-yellow-400 du-text-gray-800 du-text-sm du-text-center">Sign In</router-link>
            <!-- <button type="submit" class="du-px-5 du-py-2.5 du-rounded-lg du-bg-yellow-400 du-text-gray-800 du-text-sm du-text-center">Sign In</button> -->
          </div>
          <!-- .signin__submit -->

        </form>
        <div class="signin-form__links du-flex du-justify-center du-items-center">
          <a href="#" id="forgot-password" class="signin-form__link du-px-4 du-my-4 du-border-r du-border-gray-300 du-text-gray-400 du-text-sm du-leading-4 hover:du-text-gray-800">Forgot Password?</a>
          <a href="#" id="new-profile" class="signin-form__link du-px-4 du-my-4 du-text-gray-400 du-text-sm du-leading-4 hover:du-text-gray-800">Create New Profile</a>
        </div>
      </div>
      
      <div class="signin-social du-pt-8 du-mt-4 du-border-t du-border-gray-300">
        <button class="du-block du-px-5 du-py-2.5 du-mb-2.5 du-rounded-lg du-bg-gray-100 du-text-gray-600 du-text-sm du-text-center">Sign in with Facebook</button>
        <button class="du-block du-px-5 du-py-2.5 du-mb-2.5 du-rounded-lg du-bg-gray-100 du-text-gray-600 du-text-sm du-text-center">Sign in with Google</button>
        <!-- <a href="#" id="new-profile" class="signin-form__link du-block du-px-4 du-py-4 du-text-gray-400 du-text-sm du-leading-4 du-text-center hover:du-text-gray-800">Skip login process →</a> -->
        <router-link to="/customer-info" class="signin-form__link du-block du-px-4 du-py-4 du-text-gray-400 du-text-sm du-leading-4 du-text-center hover:du-text-gray-800">Skip login process →</router-link>
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
  form {
    width: 320px;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid #D1D5DB;
    background-color: #fff;
    font-size: 14px;
  }
  button {
    width: 100%;
  }
  .signin__submit_link {
    line-height: 1.6;
  }
  .tab__inner {
    min-height: calc(100vh - 48px);
  }

  /** SIGN-IN FORM */
  .signin-form {
    /* max-width: 320px;
    margin-left: auto;
    margin-right: auto; */
  }

  /** SIGN-IN SOCIAL */
  .signin-social {
    width: 320px;
  }
</style>