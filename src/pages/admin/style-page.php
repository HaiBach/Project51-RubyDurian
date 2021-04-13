<style>
  /** Font Icomoon */
  @font-face {
    font-family: 'icomoon-rubydurian';
    src:
      url('<?= RUBYDURIAN_URL ?>/src/fonts/icomoon-rubydurian.ttf?7ox1t8') format('truetype'),
      url('<?= RUBYDURIAN_URL ?>/src/fonts/icomoon-rubydurian.woff?7ox1t8') format('woff'),
      url('<?= RUBYDURIAN_URL ?>/src/fonts/icomoon-rubydurian.svg?7ox1t8#icomoon-rubydurian') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="du-icon-"], [class*=" du-icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon-rubydurian' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /** Danh sách icon */
  <?php require_once('style-icons.php') ?>




  /** Wordpress Menu */
  #toplevel_page_rubydurian img {
    display: inline-block;
    border: none;
  }





  /** RubyDurian App */
  #rubydurian-app {
    margin-left: -20px;
    width: calc(100% + 20px);
    min-height: calc(100vh - 44px - 32px);
  }
  #rubydurian-app img {
    border: none;
  }
  #wpbody-content {
    padding-bottom: 44px;
  }
</style>