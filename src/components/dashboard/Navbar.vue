<template>
  <div class="mb-5">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm custom-nav"
    >
      <div class="container">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img
            src="/profile.jpg"
            alt="Logo"
            height="45"
            class="me-2 rounded-circle"
          />
          <!-- <div class="d-flex flex-column lh-1">
            <strong>Profile</strong>
          </div> -->
        </router-link>

        <!-- Toggle mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active"
                >Beranda</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/profile/profile"
                class="nav-link"
                active-class="active"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/resume/resume" class="nav-link" active-class="active"
                >Resume</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/service" class="nav-link" active-class="active"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/projek/portofolio"
                class="nav-link"
                active-class="active"
                >Portofolio</router-link
              >
            </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/projek/portofolio" class="dropdown-item"
                    >Work</router-link
                  >
                </li>
                <li>
                  <router-link to="/option2" class="dropdown-item"
                    >Training</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/resume/resume" class="dropdown-item"
                    >Resume</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link to="/contact" class="nav-link" active-class="active"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Right button -->
        <!-- <div class="d-none d-lg-block">
          <a href="#get-started" class="btn btn-outline-success rounded-pill px-4">
            Get Started
          </a>
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

/* Style menu */
.nav-link {
  font-weight: 500;
  color: #333;
  margin: 0 8px;
  position: relative;
}

.nav-link.active,
.nav-link:hover {
  color: #009688;
}

.nav-link.active::after,
.nav-link:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #009688;
}
</style>
