<template>
<div class="du-bookitem du-relative">
  <div class="du-bookitem-detail du-w-96 du-bg-white du-border du-border-solid du-border-gray-600 du-rounded-lg du-overflow-hidden">
    <div class="du-bookitem__header du-relative du-bg-gray-600 du-text-white">
      <div class="du-bookitem__title du-pl-5 du-pr-14 du-py-3">
        <h3 class="du-text-white du-text-base">Appointment Details</h3>
      </div>
      <div class="du-bookitem__close du-absolute du-right-0 du-top-0">
        <button class="du-px-5 du-py-3.5 focus:du-outline-none">
          <i class="du-icon-x"></i>
        </button>
      </div>
    </div>

    <div class="du-bookitem__content du-px-5 du-py-4">
      <div class="du-bookitem__date du-mb-2.5">Thu 26 Nov, 11:30 - 12:00</div>
      <div class="du-bookitem__info">
        <table>
          <tr>
            <th>Provider</th>
            <td>Nguyễn Văn A</td>
          </tr>
          <tr>
            <th>Services</th>
            <td>Eyebrow & Lips (Waxing)<br />
              Spa Manicure<br />
              Waxing Chin<br />
            </td>
          </tr>
          <tr>
            <th>Cost</th>
            <td>$105</td>
          </tr>
          <tr>
            <th>Customer</th>
            <td>Owais Salter<br />
              +1 901 234 5678<br />
              owais.salter@gmail.com<br />
            </td>
          </tr>
          <tr>
            <th>Booked From</th>
            <td>Calendar</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="du-bookitem__footer du-flex du-justify-between du-mx-5 du-border-t du-border-solid du-border-gray-300">
      <div class="du-bookitem__btn du-bookitem__delete">
        <button class="du-py-4 du-text-red-500 focus:du-outline-none">
          <i class="du-icon-trash du-pr-2"></i>
          <span>Delete</span>
        </button>
      </div>
      <div class="du-bookitem__btn du-bookitem__edit">
        <button class="du-py-4 du-text-blue-500 focus:du-outline-none">
          <i class="du-icon-pen du-pr-2"></i>
          <span>Edit</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
module.exports = {
  data() {
    return {
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  }
}
</script>


<style scoped>
  table {
    /* width: 100%; */
  }
  th {
    padding: 10px 10px 10px 0;
    text-align: left;
    font-weight: 400;
    color: #999;
  }
  td {
    padding: 10px;
  }
</style>