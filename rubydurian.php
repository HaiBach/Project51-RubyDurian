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
    'custompage',
    'rubydurian_page_manage',
    $icon_main_url,
    99
);

  // Menu Hidden
  // add_submenu_page( $menu_name, 'RubyTabs Hidden', 'Options', $capability, $menu_name .'-hidden', 'rt03page_hidden' );
}

function rubydurian_page_manage() {
  require_once('admin/page-manage.php');
}
// function rt03page_hidden()  { require_once('admin/page-hidden.php'); }

add_action('admin_menu', 'rt03register_menu');











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