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


function get_hashed_file($filename) {
  // $regex = '/\/[\w-]+\.[\w-]+.*/i';
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.js')[0];
  preg_match($regex, $fileWithHash, $matches);
  // echo '<pre>', var_dump(dirname(__FILE__) . "/dist/assets/" . $filename . '.*.js'), '</pre>';
  // echo '<pre>', var_dump(glob(dirname(__FILE__) . "/dist/assets/" . $filename . '.*.js')), '</pre>';
  // echo '<pre>', var_dump($matches[0]), '</pre>';
  return $matches[0];
}
function get_hashed_file_css($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.css')[0];
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}

function func_load_vuescripts() {
  // wp_register_script(
  //   'rubydurian_main_js',
  //   plugin_dir_url( __FILE__ ) . 'src/main.js',
  //   array(),
  //   filemtime( plugin_dir_path( __FILE__ ) . 'src/main.js' ),
  //   true
  // );
  // wp_register_script(
  //   'rubydurian_main_js',
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
    'rubydurian_main_js',
    plugin_dir_url( __FILE__ ) . 'src/main.js',
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'src/main.js' ),
    true
  );
}
add_action('wp_enqueue_scripts', 'func_load_vuescripts');

function rubydurian_enqueue_admin($hook) {
  // $file = plugin_dir_url( __FILE__ ) . 'dist/assets' . get_hashed_file('index');
  // echo '<pre>', var_dump($file), '</pre>';
  
  if ($hook === 'toplevel_page_rubydurian') {
    wp_enqueue_script(
      'rubydurian_vuejs_next',
      plugin_dir_url( __FILE__ ) . 'src/assets/vue-next.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/assets/vue-next.js' ),
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
      'rubydurian_main_js',
      plugin_dir_url( __FILE__ ) . 'src/main.js',
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . 'src/main.js' ),
      true
    );

    // wp_enqueue_script(
    //   'rubydurian_main_js',
    //   plugin_dir_url( __FILE__ ) . 'dist/assets/' . get_hashed_file('index'),
    //   array(),
    //   null,
    //   true
    // );
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
/* CHEN BIEN JAVASCRIPT CUSTOM TRUOC TINYMCE INIT */
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
    $handle === 'rubydurian_main_js' ||
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
function rt03register_menu() {

  $icon_url   = plugins_url('admin/imgs/icon-ruby-light.svg', __FILE__);
  // $opts_main  = get_option('rt03');
  // $menu_name  = $opts_main['name'];
  $menu_name = __('RubyDurian', 'rubydurian');
  $is_access  = current_user_can('access_rubytabs');
  $capability = $is_access ? 'access_rubytabs' : NULL;


  // Menu Main
  // add_menu_page( 'RubyTabs', 'RubyTabs', $capability, $menu_name, 'rt03page_main', '' );
  $icon_main_url = plugin_dir_url( __FILE__ ) . 'public/icon-durian.svg';

  add_menu_page( 
    __( 'Ruby Durian', 'rubydurian' ),
    'RubyDurian',
    'manage_options',
    'rubydurian',
    'rubydurian_page_manage_html',
    $icon_main_url,
    99
  );

  // Menu Hidden
  // add_submenu_page( $menu_name, 'RubyTabs Hidden', 'Options', $capability, $menu_name .'-hidden', 'rt03page_hidden' );
}

function rubydurian_page_manage_html() {
  require_once('src/pages/admin/page-manage.php');
}
// function rt03page_hidden()  { require_once('admin/page-hidden.php'); }

add_action('admin_menu', 'rt03register_menu');











//Add shortscode
function func_wp_vue() {
  wp_enqueue_script('rubydurian_vuejs_next');
  wp_enqueue_script('rubydurian_main_js');

  $str= "<div id='rubydurian-app'>"
        ."Message from Vue: {{ message }}"
        ."</div>";  
  return $str;
} // end function

add_shortcode( 'wpvue', 'func_wp_vue' );