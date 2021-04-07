<section id="rubydurian-app" class="du-flex">
  <!-- Navigation -->
  <?php require_once('navigation.php') ?>

  <!-- Main -->
  <main id="rubydurian-main" class="du-bg-white du-flex-1">
    <!-- Route Outlet -->
    <router-view></router-view>
  </main>
</section>


<!--Style -->
<?php require_once('style-page.php') ?>