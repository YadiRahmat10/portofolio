<template>
  <div class="container mt-5 py-5">
    <div class="row g-4">
      <div
        class="col-lg-4"
        v-for="(project, index) in paginatedProjects"
        :key="index"
      >
        <div class="portfolio-card">
          <!-- Image -->
          <div class="portfolio-image">
            <img :src="project.image" :alt="project.title" />
            <span v-if="project.badge" class="badge-top">
              {{ project.badge }}
            </span>
          </div>

          <!-- Content -->
          <div class="portfolio-body">
            <div class="meta">
              <span class="category">{{ project.category }}</span>
              <span class="year">{{ project.year }}</span>
            </div>

            <h3 class="title">{{ project.title }}</h3>
            <p class="desc">{{ project.desc }}</p>

            <div class="tags">
              <span v-for="(tag, i) in project.tech" :key="i">
                {{ tag }}
              </span>
            </div>

            <a :href="project.route" class="case-link">
              View Case <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="custom-pagination mt-5">
      <button
        class="page-link"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        ‹
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="page-link"
        :class="{ active: page === currentPage }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>

      <button
        class="page-link"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const projects = ref([
  {
    title: "SIMPEG Dashboard",
    // desc: "Sistem Informasi Manajemen Kepegawaian yang digunakan oleh Pemerintah Kota Bogor (dan juga Kabupaten Bogor) sebagai platform digital untuk mengelola seluruh data dan administrasi Aparatur Sipil Negara (ASN) secara efisien, mencakup pengajuan cuti, absensi, pengelolaan kinerja, perubahan data pribadi/keluarga, kenaikan pangkat, dan layanan kepegawaian lainnya",
    image: "/simpeg.jpg",
    route: "/projek/simpeg",
    category: "WEB DEVELOPMENT",
    year: "-",
    // badge: "FEATURED",
    tech: ["Vue.Js", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "SICANTIK App",
    // desc: "Sistem Informasi Catatan Kehadiran dan Kinerja untuk Pemerintah Kabupaten Bogor adalah Aplikasi berbasis web dan mobile (Android/iOS) untuk absensi, laporan harian (LKHP/SKP), pengajuan izin (cuti, dinas luar), dan manajemen kinerja pegawai secara real-time menggunakan GPS, yang bertujuan meningkatkan disiplin dan transparansi kinerja ASN.",
    image: "/sicantik.jpg",
    route: "/projek/sicantik",
    category: "WEB DEVELOPMENT",
    year: "-",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "SIABANG TAMPAN",
    // desc: "SIABANG TAMPAN (Sistem Informasi Pengembangan Kompetensi ASN Masa Depan) adalah platform digital untuk pengembangan kompetensi Aparatur Sipil Negara (ASN) di Kabupaten Bogor, yang berfungsi sebagai Learning Management System (LMS) untuk memantau, mengelola, dan memfasilitasi pelatihan",
    image: "/siabang.jpg",
    route: "/projek/siabang",
    category: "WEB DEVELOPMENT",
    year: "-",
    // badge: "AWARD WINNER",
    tech: ["Vue.Js", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "SAKIP",
    // desc: "Brand identity modern untuk startup teknologi.",
    image: "/sakip.jpg",
    route: "/projek/sakip",
    category: "WEB DEVELOPMENT",
    year: "-",
    // badge: "AWARD WINNER",
    tech: ["Vue.Js", "JavaScript", "PHP", "MySQL"],
  },

  {
    title: "SIMANTAP",
    // desc: "Brand identity modern untuk startup teknologi.",
    image: "/simantap.jpg",
    route: "/projek/samantap",
    category: "WEB DEVELOPMENT",
    year: "-",
    // badge: "AWARD WINNER",
    tech: ["Vue.Js", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "KMOB",
    // desc: "Brand identity modern untuk startup teknologi.",
    image: "/kmob.png",
    route: "/projek/kmob",
    category: "WEB DEVELOPMENT",
    year: "-",
    // badge: "AWARD WINNER",
    tech: ["Vue.Js", "JavaScript", "PHP", "MySQL"],
  },
]);

const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() =>
  Math.ceil(projects.value.length / itemsPerPage)
);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return projects.value.slice(start, start + itemsPerPage);
});
</script>

<style scoped>
.portfolio-card {
  /* background: linear-gradient(180deg, #0f172a, #020617); */
  background: linear-gradient(180deg, #2a2a2a, #1f1f1f);
  border-radius: 18px;
  overflow: hidden;
  height: 100%;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.35s ease;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
}

/* Image */
.portfolio-image {
  position: relative;
}

.portfolio-image img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

/* Badge */
.badge-top {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #0ea5e9;
  color: #fff;
  font-size: 0.7rem;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
}

/* Body */
.portfolio-body {
  padding: 22px;
  color: #e5e7eb;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  color: #38bdf8;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #cbd5f5;
  margin-bottom: 15px;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.tags span {
  /* background: #020617;
  border: 1px solid #1e293b; */
  background: #2b2b2b;
  border: 1px solid #3f3f3f;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  color: #38bdf8;
}

/* Link */
.case-link {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.case-link:hover {
  color: #38bdf8;
}

/* Pagination */
.custom-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.page-link {
  background: transparent;
  border: 1px solid #38bdf8;
  color: #38bdf8;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.page-link.active,
.page-link:hover {
  /* background: #38bdf8;
  color: #020617; */
  background: #38bdf8;
  color: #1f2933;
}
</style>
