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
  /** Wordpress Footer */
  /* .toplevel_page_rubydurian #wpfooter,
  .rubydurian_page_rubydurian-booking #wpfooter,
  .rubydurian_page_rubydurian-customers #wpfooter,
  .rubydurian_page_rubydurian-staffs #wpfooter,
  .rubydurian_page_rubydurian-services #wpfooter,
  .rubydurian_page_rubydurian-options #wpfooter {
    display: none;
  } */
  #wpcontent {
    padding-left: 0;
  }
  #wpfooter {
    display: none;
  }
  #wpbody-content {
    padding-bottom: 0;
  }
  #update-nag, .update-nag {
    position: absolute;
    z-index: 99;
  }





  /** RubyDurian App */
  /* #rubydurian-app {
    margin-left: -20px;
    width: calc(100% + 20px);
    min-height: calc(100vh - 32px);
  }
  #rubydurian-app img {
    border: none;
  }
  #rubydurian-main {
    
  } */
  #rubydurian-app {
    position: relative;
    display: grid;
    grid-template-areas:  'nav header'
                          'nav main';
    grid-template-rows: 56px auto;
    grid-template-columns: 96px 1fr;
  }
  #rubydurian-nav {
    grid-area: nav;
  }
  .du-nav__inner {
    position: sticky;
    top: 32px;
    min-height: calc(100vh - 32px);
  }
  #rubydurian-header {
    grid-area: header;
    position: sticky;
    top: 32px;
  }
  #rubydurian-maincontent {
    grid-area: main;
    
  }
</style>