<nav id="rubydurian-nav" class="du-flex du-flex-col du-justify-between du-w-24 du-bg-gray-100">
  <div class="du-nav__top">
    <div class="du-nav__logo du-text-center du-py-5 du-px-2.5 hover:du-opacity-50">
      <router-link to="/admin.php?page=rubydurian" class="du-inline-block">
        <img src="<?php echo RUBYDURIAN_URL ?>/src/images/logo-durian.png" alt="Logo RubyDurian">
      </router-link>
    </div>
    <ul class="du-flex du-flex-col">
      <li>
        <router-link to="/admin.php?page=rubydurian" class="du-nav__link">
          <i class="du-icon-home"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/admin.php?page=rubydurian-calendar" class="du-nav__link">
          <i class="du-icon-calendar"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/admin.php?page=rubydurian-customers" class="du-nav__link">
          <i class="du-icon-people"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/admin.php?page=rubydurian-staffs" class="du-nav__link">
          <i class="du-icon-badge"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/admin.php?page=rubydurian-services" class="du-nav__link">
          <i class="du-icon-checklist"></i>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="du-nav__bottom">
    <router-link to="/admin.php?page=rubydurian-options" class="du-nav__link">
      <i class="du-icon-gear"></i>
    </router-link>
  </div>
</nav>