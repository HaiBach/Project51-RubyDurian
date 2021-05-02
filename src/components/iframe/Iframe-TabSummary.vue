<template>
  <div class="tab tab__summary">
    <div class="tab__inner du-flex du-flex-col du-px-5 du-pt-5">
      
      <!-- Table -->
      <table class="du-block du-w-full du-pb-7">
        <tr>
          <th>Date / Time</th>
          <td>Webnesday 23 Nov, 2020   -  11 : 30</td>
        </tr>
        <tr>
          <th>Shop</th>
          <td>Shop 1 - Rose
            <span>3140  Clement Street, GA State, Atlanta City</span>
          </td>
        </tr>
        <tr>
          <th>Services</th>
          <td>+ Manicure & Pedicure (Signature) | $48 | 40 mins
            <span>—— Any Staff</span>
            + Manicure & Pedicure (Signature) | $68 | 60 mins
            <span>—— Lisa Martinez</span>
          </td>
        </tr>
        <tr>
          <th>Your Info</th>
          <td>Nguyen Van A
            <span>vana.nguyen@gmail.com<br>
              +1 (808)-216-5195<br>
              25  Emma Street, Hawaii State, Moanalua City - 96819<br>
            </td>
        </tr>
      </table>

      <!-- Notes -->
      <div class="notes du-pt-7 du-pb-5 du-border-t du-border-gray-300">
        <div class="notes__title du-mb-5">
          <h2 class="du-font-bold du-text-sm du-text-center">More Notes</h2>
        </div>
        <div class="notes__txt">
          <p>Morbi imperdiet efficitur nulla, a bibendum lacus facilisis ut. Aenean vulputate ipsum id est tincidunt, ut faucibus lacus congue. Phasellus nec neque aliquam, facilisis lacus at, mattis dolor. Praesent malesuada ultrices elit. Phasellus rutrum tortor at augue malesuada semper. Pellentesque sed sapien lorem. Nunc congue dolor non elit gravida rhoncus. Quisque vitae lacus vitae eros pharetra malesuada. Donec vestibulum, lorem pretium eleifend hendrerit, nisi velit consectetur mi, eu ultrices eros nisi vitae urna. Nam congue maximus mattis. Suspendisse sit amet dolor ut nisl porta imperdiet nec nec arcu. Proin ut massa quis quam porta blandit at maximus diam.</p>
          <p>Quisque mattis sem aliquam tellus pretium, ut rhoncus massa aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum neque vitae magna aliquam condimentum. Nunc ac lectus eu odio ullamcorper dapibus et non lorem. Sed non dolor ac nibh aliquet fringilla. Nunc laoreet, sem nec dapibus tincidunt, massa tortor volutpat lectus, eget dapibus lectus lectus ut arcu. Mauris non neque sit amet quam ultrices congue. Aenean porttitor maximus erat quis consectetur. Nulla lectus metus, sodales vitae maximus in, finibus eget quam. Quisque eu mauris et tortor malesuada elementum. Morbi vulputate accumsan nibh, non sollicitudin libero placerat sit amet. Ut blandit risus eu lobortis laoreet. Duis sed dictum augue, at vehicula odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sed elit ut lacinia. Curabitur commodo erat nec diam elementum, in imperdiet risus dapibus.</p>
        </div>
      </div>

      <!-- Tab Footer -->
      <div class="tab__footer du-pt-8 du-mb-8 du-border-t du-border-gray-300 du-text-gray-500 du-text-center">
        <div class="form du-flex du-justify-center du-items-center du-mt-2.5">
          <div class="input-policy">
            <input type="checkbox" id="agree-send-mail" class="du-absolute du-invisible">
            <label for="agree-send-mail" class="du-relative du-block du-text-sm">Yes, send me a reminder email</label>
          </div>
        </div>
      </div>
    </div>

    <Footer to="/success"></Footer>
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
    width: 100%;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  /** Table */
  th {
    padding: 7px 20px 7px 0;
    color: #6B7280;
    font-weight: 400;
    white-space: nowrap;
    text-align: left;
    vertical-align: top;
  }
  td {
    padding: 7px 0 7px 20px;
  }
  td span {
    display: block;
    color: #6B7280;
  }

  /** Notes */
  .notes p {
    margin-bottom: 20px;
    color: #6B7280;
    font-size: 14px;
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
    font-family: 'rubydurian-iframe' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    content: '\e908';
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    width: 24px;
    height: 24px;
    font-size: 27px;
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0;
    transform: perspective(600px) rotate(-180deg) translate3d(0,0,-1000px);
  }
  input[type="checkbox"]:checked + label::before {
    border-color: #F59E0B;
  }
  input[type="checkbox"]:checked + label::after {
    color: #F59E0B;
    opacity: 1;
    transform: perspective(600px) rotate(0deg) translate3d(0,0,0);
  }

  /** MEDIA **/
  @media screen and (max-width: 450px) {
    tr, th, td {
      display: block;
      width: 100%;
    }
    th {
      padding: 0 0 5px;
      /* color: #1F2937; */
      font-size: 14px;
      font-weight: 700;
    }
    td {
      padding: 0 0 20px;
      border-bottom: 1px dashed #ccc;
    }
  }
</style>