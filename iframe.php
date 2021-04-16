<?php
/**
 * FRONTEND - IFRAME
 */
// Get đường dẫn plugin
$https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$http_host = $_SERVER['HTTP_HOST'];
$request_uri = $_SERVER['REQUEST_URI'];

// Loại bỏ đường dẫn '/src/pages/frontend/iframe/'
$uri_dir = str_replace('/iframe.php', '/', $request_uri);
$url_plugin = $https . '://' . $http_host . $uri_dir;


// Lấy tên file css để import
/** Function Hash file */
function get_hashed_file_css($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.css')[0];
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}
$filename_css = get_hashed_file_css('index');
$link_main_css = $url_plugin . 'dist/assets/' . $filename_css;
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking on RubyDurian</title>

    <!-- Style -->
    <link rel="stylesheet" href="<?= $link_main_css ?>">

    <!-- Scripts -->
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>

    <script type="text/javascript" class="rubydurian-script-value">
      if( !window.rubydurianVA ) window.rubydurianVA = {};
      window.rubydurianVA['urlPlugin'] = "<?= $url_plugin ?>";
    </script>
  </head>
  <body>
    <div id="rubydurian-app"></div>
    <script type="module" src="<?= $url_plugin ?>src/iframe.js"></script>
  </body>
</html>
