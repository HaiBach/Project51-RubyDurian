<section id="rubydurian-app" class="">
  <!-- Navigation -->
  <nav>
    <div class="du-nav__top">
      <a class="du-nav__logo">
        Logo
      </a>
      <ul>
        <li><router-link to="/admin.php?page=rubydurian">Dashboard</router-link></li>
        <li><router-link to="/admin.php?page=rubydurian-calendar">Calendar</router-link></li>
        <li><router-link to="/admin.php?page=rubydurian-customers">Customers</router-link></li>
        <li><router-link to="/admin.php?page=rubydurian-staffs">Staffs</router-link></li>
        <li><router-link to="/admin.php?page=rubydurian-services">Services</router-link></li>
      </ul>
    </div>
    <div class="du-nav__bottom">
      <a href="#">Options</a>
    </div>
  </nav>

  <!-- Main -->
  <main>
    <!-- Route Outlet -->
    <router-view></router-view>
  </main>
</section>