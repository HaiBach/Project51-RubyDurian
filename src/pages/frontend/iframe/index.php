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
      <?php
        // Get đường dẫn plugin
        $https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
        $http_host = $_SERVER['HTTP_HOST'];
        $request_uri = $_SERVER['REQUEST_URI'];
        $uri_array = explode('/', $request_uri);
        $uri_plugins = array_slice($uri_array, 0, 4);
        $uri_plugins = join('/', $uri_plugins);
        $url_plugin = $https . '://' . $http_host . $uri_plugins . '/';
      ?>
      window.rubydurianVA['urlPlugin'] = "<?php echo $url_plugin ?>";
    </script>
  </head>
  <body>
    <h2>Template Frontend iframe trên PHP</h2>
    <div id="rubydurian-app"></div>
    <script type="module" src="/wp-content/plugins/rubydurian/src/frontend-iframe.js"></script>
  </body>
</html>
