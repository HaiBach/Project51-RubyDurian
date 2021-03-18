<?php
 /**
 * Plugin Name: WordPress Vue
 * Description: Vue-App in WordPress.
 */

function func_load_vuescripts() {
  wp_register_script(
    'rubydurian_vuejs_next',
    plugin_dir_url( __FILE__ ) . 'src/assets/vue-next.js',
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue-next.js' ),
    false
  );

  // wp_register_script(
  //   'rubydurian_main_js',
  //   plugin_dir_url( __FILE__ ) . 'src/main.js',
  //   array(),
  //   filemtime( plugin_dir_path( __FILE__ ) . 'src/main.js' ),
  //   true
  // );
  wp_register_script(
    'rubydurian_main_js',
    plugin_dir_url( __FILE__ ) . 'dist/assets/index.08133c3c.js',
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'dist/assets/index.08133c3c.js' ),
    true
  );
}

add_action('wp_enqueue_scripts', 'func_load_vuescripts');

//Add shortscode
function func_wp_vue() {
  wp_enqueue_script('rubydurian_vuejs_next');
  wp_enqueue_script('rubydurian_main_js');

  $str= "<div id='app'>"
        ."Message from Vue: {{ message }}"
        ."</div>";
  return $str;
} // end function

add_shortcode( 'wpvue', 'func_wp_vue' );