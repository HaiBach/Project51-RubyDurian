<?php
 /**
 * RUBY-DURIAN WORDPRESS PLUGIN
 * @package         RubyDurian
 * @author          HaiBach
 * @link            https://haibach.net/rubydurian
 *
 *
 * Plugin Name:     RubyDurian
 * Plugin URI:      https://haibach.net/rubytabs
 * Description:     RubyDurian, test wordpress plugin.
 * Version:         1.0
 * Author:          HaiBach
 * Author URI:      https://haibach.net
 * Tested up to:    5.7
 */

/**
 * CHECK FIRST!
 *  + Kiem tra plugin co chay trong wordpress -> kiem tra bien wpinc
 *  + Kiem tra wordpress co upgrading hay khong -> loai bo rubytabs loading
 */
if( !defined('WPINC') ) die();
if( defined('WP_INSTALLING') && WP_INSTALLING ) return;
define('RUBYDURIAN_URL', plugin_dir_url( __FILE__ ));










/**
 * LOAD SCRIPT + STYLE
 */
function get_hashed_file($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.js')[0];
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}
function get_hashed_file_sourcemap($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.js.map')[0];
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}
function get_hashed_file_css($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.css')[0];
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}

function rubydurian_load_vuescripts() {
  // wp_register_script(
  //   'rubydurian_backend_js',
  //   plugin_dir_url( __FILE__ ) . 'src/main.js',
  //   array(),
  //   filemtime( plugin_dir_path( __FILE__ ) . 'src/main.js' ),
  //   true
  // );
  // wp_register_script(
  //   'rubydurian_backend_js',
  //   plugin_dir_url( __FILE__ ) . 'dist/assets/index.08133c3c.js',
  //   array(),
  //   filemtime( plugin_dir_path( __FILE__ ) . 'dist/assets/index.08133c3c.js' ),
  //   true
  // );
  wp_register_script(
    'rubydurian_vuejs_next',
    plugin_dir_url( __FILE__ ) . 'src/assets/vue-next.js',
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue-next.js' ),
    false
  );
  wp_register_script(
    'rubydurian_backend_js',
    plugin_dir_url( __FILE__ ) . 'src/backend.js',
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'src/backend.js' ),
    true
  );
}
add_action('wp_enqueue_scripts', 'rubydurian_load_vuescripts');

function rubydurian_enqueue_admin($hook) {
  // $hook === 'toplevel_page_rubydurian'
  // $hook === 'rubydurian_page_rubydurian-booking'
  // $hook === 'rubydurian_page_rubydurian-customers'
  // $hook === 'rubydurian_page_rubydurian-staffs'
  // $hook === 'rubydurian_page_rubydurian-services'
  // $hook === 'rubydurian_page_rubydurian-options'
  if ( preg_match( "/\_rubydurian/i", $hook ) ) {

    wp_enqueue_script(
      'rubydurian_vuejs_next',
      plugin_dir_url( __FILE__ ) . 'src/assets/vue-next.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue-next.js' ),
      false
    );
    wp_enqueue_script(
      'rubydurian_vue_router',
      plugin_dir_url( __FILE__ ) . 'src/assets/vue-router.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue-router.js' ),
      false
    );
    wp_enqueue_script(
      'rubydurian_vue3_sfc_loader',
      plugin_dir_url( __FILE__ ) . 'src/assets/vue3-sfc-loader.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue3-sfc-loader.js' ),
      false
    );
    
    wp_enqueue_script(
      'rubydurian_backend_js',
      plugin_dir_url( __FILE__ ) . 'src/backend.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/backend.js' ),
      true
    );

    // wp_enqueue_script(
    //   'rubydurian_backend_js',
    //   plugin_dir_url( __FILE__ ) . 'dist/assets/' . get_hashed_file('index'),
    //   array(),
    //   null,
    //   true
    // );
    // wp_enqueue_script(
    //   'rubydurian_backend_js_sourcemap',
    //   plugin_dir_url( __FILE__ ) . 'dist/assets/' . get_hashed_file_sourcemap('index'),
    //   array(),
    //   null,
    //   true
    // );

    // Script Vendor
    // wp_enqueue_script(
    //   'rubydurian_vendor_js',
    //   plugin_dir_url( __FILE__ ) . 'dist/assets/' . get_hashed_file('vendor'),
    //   array(),
    //   null,
    //   true
    // );

    /** STYLE */
    wp_enqueue_style(
      'rubydurian_main_style',
      plugin_dir_url( __FILE__ ) . 'dist/assets/' . get_hashed_file_css('index'),
      array(),
      null
    );
  }
}
add_action('admin_enqueue_scripts', 'rubydurian_enqueue_admin');


/* CHÈN BIẾN GLOBAL JAVASCRIPT */
function rubydurian_add_custom_script($hook) {
  ?>
    <script type="text/javascript" class="rubydurian-script-value">
      if( !window.rubydurianVA ) window.rubydurianVA = {};
      window.rubydurianVA['urlPlugin'] = "<?php echo plugin_dir_url(__FILE__) ?>";
    </script>
  <?php
}
add_action('admin_enqueue_scripts', 'rubydurian_add_custom_script');


/** Thêm attribute `module` trên thẻ `script` */
function add_type_attribute($tag, $handle, $src) {
  if (
    $handle === 'rubydurian_backend_js' ||
    $handle === 'rubydurian_backend_js_sourcemap' ||
    $handle === 'rubydurian_vendor_js'
    ) {
    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    return $tag;
  }
  return $tag;
}
add_filter('script_loader_tag', 'add_type_attribute', 10, 3);










/**
 * ADMIN MENU
 * Thêm menu vào trang quản lý
 */
function rubydurian_register_menu() {

  // Menu Main
  $icon_main_url = plugin_dir_url( __FILE__ ) . 'public/icon-durian.svg';
  add_menu_page( 
    __( 'Ruby Durian', 'rubydurian' ),
    'RubyDurian',
    'manage_options',
    'rubydurian',
    'rubydurian_htmlpage_home',
    $icon_main_url,
    99
  );

  // Submenu
  add_submenu_page(
    'rubydurian',
    __( 'Booking', 'rubydurian' ),
    'Booking',
    'manage_options',
    'rubydurian-booking',
    'rubydurian_htmlpage_page_default'
  );
  add_submenu_page(
    'rubydurian',
    __( 'Customers', 'rubydurian' ),
    'Customers',
    'manage_options',
    'rubydurian-customers',
    'rubydurian_htmlpage_page_default'
  );
  add_submenu_page(
    'rubydurian',
    __( 'Staffs', 'rubydurian' ),
    'Staffs',
    'manage_options',
    'rubydurian-staffs',
    'rubydurian_htmlpage_page_default'
  );
  add_submenu_page(
    'rubydurian',
    __( 'Services', 'rubydurian' ),
    'Services',
    'manage_options',
    'rubydurian-services',
    'rubydurian_htmlpage_page_default'
  );
  add_submenu_page(
    'rubydurian',
    __( 'Options', 'rubydurian' ),
    'Options',
    'manage_options',
    'rubydurian-options',
    'rubydurian_htmlpage_page_default'
  );

  // Menu Hidden
  // add_submenu_page( $menu_name, 'RubyTabs Hidden', 'Options', $capability, $menu_name .'-hidden', 'rt03page_hidden' );
}

function rubydurian_htmlpage_home() {
  require_once('src/pages/admin/page.php');
}
function rubydurian_htmlpage_page_default() {
  require_once('src/pages/admin/page.php');
}
add_action('admin_menu', 'rubydurian_register_menu');










/**
 * ADD SHORTCODE
 */
function func_wp_vue() {
  wp_enqueue_script('rubydurian_vuejs_next');
  wp_enqueue_script('rubydurian_backend_js');

  $str= "<div id='rubydurian-app'>"
        ."Message from Vue: {{ message }}"
        ."</div>";  
  return $str;
} // end function

add_shortcode( 'wpvue', 'func_wp_vue' );