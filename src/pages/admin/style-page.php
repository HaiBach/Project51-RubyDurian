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





  /** RubyDurian App */
  #rubydurian-app {
    margin-left: -20px;
    width: calc(100% + 20px);
    min-height: calc(100vh - 40px - 34px);
  }
  #rubydurian-app img {
    border: none;
  }
  #wpbody-content {
    padding-bottom: 42px;
  }





  /** RubyDurian Navigation */
  #rubydurian-nav li {
    display: block;
    margin-bottom: 0;
  }
  .du-nav__link {
    display: block;
    padding: 15px 10px;
    margin: 10px;
    text-align: center;
    border-radius: 6px;
    color: #999;
    font-size: 1.6rem;
    line-height: 1;
  }
</style>