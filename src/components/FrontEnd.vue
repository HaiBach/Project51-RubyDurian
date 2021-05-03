<template>
  <p>
    <!-- <button
      class="rubydurian-button du-px-4 du-py-1.5 du-mb-2.5 du-rounded-md du-border du-border-yellow-500 du-bg-yellow-400 du-text-gray-800 du-text-sm"
      rel="rubydurianButton"
      :id="'rubydurian-button-' + btnID"
      @click="appendIframe"
      >Booking on RubyDurian</button> -->
    
    <a
      class="rubybox du-px-4 du-py-1.5 du-mb-2.5 du-rounded-md du-border du-border-yellow-500 du-bg-yellow-400 du-text-gray-800 du-text-sm"
      href=".rubydurian-iframe"
      >Booking on RubyDurian</a>
  </p>
  <div class="du-hidden">
    <div class="rubydurian-iframe">
      <iframe :src="srcIframe" width="800" height="600" title="Booking on RubyDurian" class="du-rounded-md du-bg-white"></iframe>
    </div>
  </div>
  <!-- <iframe :src="srcIframe" width="800" height="600" title="Booking on RubyDurian" class="du-rounded-md du-bg-white"></iframe> -->
</template>


<script>
export default {
  data() {
    return {
      btnID: Math.round( Math.random() * 100000000 ),
      urlPlugin: window.rubydurianVA.urlPlugin,
    }
  },
  computed: {
    srcIframe() {
      return this.urlPlugin + 'iframe.php'
    }
  },
  methods: {
    insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    },
    appendIframe() {
      const newIframe = document.createElement('iframe')
      newIframe.setAttribute('src', this.srcIframe)
      // newIframe.setAttribute('width', '800')
      newIframe.setAttribute('height', '600')
      newIframe.setAttribute('title', 'Booking on RubyDurian')
      newIframe.setAttribute('class', 'du-rounded-md du-bg-white')
      newIframe.style.width = '100%'
      newIframe.style.maxWidth = '800px'
      newIframe.style.maxHeight = '600px'
      newIframe.style.border = '1px solid #9CA3AF'

      // const $btnsCurrent = document.getElementsByClassName('rubydurian-button')
      const $btnCurrent = document.getElementById('rubydurian-button-' + this.btnID)
      if (!!$btnCurrent) {
        this.insertAfter( $btnCurrent, newIframe )
        console.log(this.urlPlugin)
      }
    }
  },
  mounted() {
    /** RUN RUBYBOX */
    const rubybox = jQuery('.rubybox').rubybox({
      width : 800, // Kích thước của Rubybox
      height : 600, // 100%, đơn vị là %
      margin : [20, 10, 20, 10],
      isOverClose : false // Bấm vào vùng xunh quanh để tắt Rubybox
    })
  }
}
</script>


<style scoped>
  button.rubydurian-button {
    /* background-color: #F59E0B;
    color: #1F2937; */
  }
</style>