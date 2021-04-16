<?php
/**
 * FRONTEND - IFRAME
 */
// Get đường dẫn plugin
$https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$http_host = $_SERVER['HTTP_HOST'];
$request_uri = $_SERVER['REQUEST_URI'];

// Loại bỏ đường dẫn '/src/pages/frontend/iframe/'
$uri_array = explode('/', $request_uri);
$uri_plugins = array_slice($uri_array, 0, 4);
$uri_plugins = join('/', $uri_plugins);
$url_plugin = $https . '://' . $http_host . $uri_plugins . '/';

/** Function Hash file */
function get_hashed_file_css($filename) {
  $regex = '/[\w+]+\.[\w+]+\.\w+/i';
  $fileWithHash = glob(dirname(__FILE__) . '/dist/assets/' . $filename . '.*.css');
  echo '<pre>', var_dump(realpath(__FILE__)), '</pre>';
  preg_match($regex, $fileWithHash, $matches);
  return $matches[0];
}
$files = get_hashed_file_css('index');
echo '<pre>', var_dump($files), '</pre>';
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking on RubyDurian</title>

    <!-- Style -->
    <link rel="stylesheet" href="/src/frontend.css">

    <!-- Scripts -->
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>

    <script type="text/javascript" class="rubydurian-script-value">
      if( !window.rubydurianVA ) window.rubydurianVA = {};
      window.rubydurianVA['urlPlugin'] = "<?php echo $url_plugin ?>";
    </script>
  </head>
  <body>
    <div id="rubydurian-app"></div>
    <script type="module" src="/wp-content/plugins/rubydurian/src/iframe.js"></script>
  </body>
</html>
