<template>
  <div class="mb-5">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm custom-nav"
    >
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="/profile.jpg" alt="Logo" height="50" class="me-2" />
          <div class="d-flex flex-column lh-1">
            <strong>Portofolio</strong>
          </div>
        </a>

        <!-- Menu -->
        <!-- <div class="collapse navbar-collapse" id="navbarNav">
          <div class="d-flex align-items-center gap-2">
            <div class="dropdown">
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Profil</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
            <a href="#" class="btn btn-outline-success rounded-pill">
              <i class="bi bi-list"></i> Menu
            </a>
          </div>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<style scoped>
.custom-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1050; 
}
.nav-link {
  position: relative;
}
.nav-link.active::after,
.nav-link:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: blue;
}
</style>
