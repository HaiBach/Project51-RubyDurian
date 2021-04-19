<template>
  <div class="tab tab__time">
    <div class="tab__inner du-px-5 du-pt-5">
      <div class="signin-form">
        <form action="">
          <div class="signin__email du-mb-2.5">
            <input type="email" name="email" value="" placeholder="Email">
          </div>
          <div class="signin__password du-mb-2.5">
            <input type="password" name="password" value="" placeholder="Password">
          </div>
          <div class="signin__submit du-mb-2.5">
            <button type="submit" class="du-px-5 du-py-2.5 du-rounded-md du-bg-yellow-400 du-text-gray-800 du-text-center">Sign In</button>
          </div>
        </form>
      </div>
      
      <div class="signin-social">
        
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
  input[type="email"],
  input[type="password"] {
    width: 320px;
    padding: 8px 18px;
    border-radius: 6px;
    border: 1px solid #D1D5DB;
    background-color: #fff;
  }
  button {
    width: 320px;
  }
</style>