<template>
  <nav
    class="navbar navbar-expand-lg navbar-light shadow-sm rounded-pill fixed-top custom-navbar px-4 py-2"
  >
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img
          src="/profile.jpg"
          alt="Logo"
          height="40"
          class="me-2 rounded-circle"
        />
        <span class="fw-bold text-dark">PORTFOLIO</span>
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
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav align-items-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume/resume" class="nav-link" active-class="active">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service" class="nav-link" active-class="active">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projek/portofolio" class="nav-link" active-class="active">Work</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Project
            </a>
            <ul class="dropdown-menu rounded-3 shadow-sm">
              <li><router-link to="/projek/portofolio" class="dropdown-item"><i class="bi bi-file-earmark-fill me-2"></i>Work</router-link></li>
              <li><router-link to="/option2" class="dropdown-item"><i class="bi bi-file-earmark-code me-2"></i>Training</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><router-link to="/resume/resume" class="dropdown-item"><i class="bi bi-file-earmark-person-fill me-2"></i>Resume</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" active-class="active"><i class="bi bi-telephone-fill me-2"></i>Contact</router-link>
          </li>
        </ul>
      </div>

      <!-- Search -->
      <!-- <div class="d-none d-lg-flex align-items-center ms-3 search-box">
        <input
          type="text"
          class="form-control form-control-sm rounded-pill border-0 shadow-sm px-3"
          placeholder="Search"
        />
        <i class="bi bi-search ms-n4 text-muted"></i>
      </div> -->
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1300px;
  background: linear-gradient(145deg, #c0c0c0, #e0e0e0); /* Warna silver */
  backdrop-filter: blur(10px);
  border: 1px solid #b0b0b0;
  box-shadow: 0 4px 10px rgba(150, 150, 150, 0.3);
  z-index: 1050;
}

/* Warna & efek link */
.nav-link {
  font-weight: 500;
  color: #333 !important;
  margin: 0 10px;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link.active,
.nav-link:hover {
  color: #000 !important;
}

.nav-link.active::after,
.nav-link:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #8d8d9b; /* abu-abu elegan */
  border-radius: 2px;
}

/* Search box */
.search-box {
  position: relative;
}

.search-box input {
  width: 150px;
  transition: width 0.3s ease;
}

.search-box input:focus {
  width: 200px;
  outline: none;
}

.search-box i {
  position: relative;
  right: 25px;
  cursor: pointer;
}

/* Agar konten di bawah tidak tertutup navbar */
body {
  padding-top: 90px;
}
</style>
