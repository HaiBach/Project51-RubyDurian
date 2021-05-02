<template>
  <p>
    <button
      class="rubydurian-button du-px-4 du-py-1.5 du-mb-2.5 du-rounded-md du-border du-border-yellow-500 du-bg-yellow-400 du-text-gray-800 du-text-sm"
      rel="rubydurianButton"
      :id="'rubydurian-button-' + btnID"
      @click="appendIframe"
      >Booking on RubyDurian</button>
  </p>
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
}
</script>


<style scoped>
  button.rubydurian-button {
    /* background-color: #F59E0B;
    color: #1F2937; */
  }
  iframe {
    border: 1px solid rgba(0,0,0,0.5);
  }
</style>