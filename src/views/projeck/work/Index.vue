<template>
  <div class="container mt-5 py-5">
    <div
      class="isotope-layout"
      data-default-filter="*"
      data-layout="masonry"
      data-sort="original-order"
    >
      <!-- Portfolio Items -->
      <div
        class="row gy-4 isotope-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
          v-for="(project, index) in paginatedProjects"
          :key="index"
        >
          <div class="portfolio-content h-100 relative">
            <img :src="project.image" class="img-fluid" :alt="project.title" />
            <div
              class="portfolio-info absolute inset-0 flex flex-col justify-center items-center text-white text-center"
            >
              <h4>{{ project.title }}</h4>
              <p>{{ project.desc }}</p>
              <div class="d-flex justify-content-center gap-3 mt-2">
                <!-- Tombol Zoom -->
                <a
                  :href="project.image"
                  class="glightbox preview-link"
                  :data-gallery="`portfolio-gallery-${project.title}`"
                  :title="project.title"
                >
                  <i class="bi bi-zoom-in"></i>
                </a>
                <!-- Tombol Link -->
                <a
                  :href="project.route"
                  class="details-link"
                  title="More Details"
                >
                  <i class="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- End Portfolio Item -->
      </div>

      <!-- Pagination -->
      <div class="custom-pagination mt-4">
        <button
          class="page-link"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <i class="bi bi-chevron-left"></i>
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
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

// Data proyek
const projects = ref([
  {
    title: "SIMPEG",
    // desc: "Sistem Informasi Manajemen Kepegawaian.",
    image: "/simpeg.jpg",
    route: "/projek/simpeg",
  },
  {
    title: "SICANTIK",
    image: "/sicantik.jpg",
    route: "/projek/sicantik",
  },
  {
    title: "SIABANG",
    image: "/siabang.jpg",
    route: "/projek/siabang",
  },
  {
    title: "SAKIP",
    image: "/sakip.png",
    route: "/projek/sakip",
  },
  {
    title: "SAMANTAP",
    image: "/simantap.png",
    route: "/projek/samantap",
  },
  {
    title: "KMOB",
    image: "/kmob.png",
    route: "/projek/samantap",
  },
]);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() =>
  Math.ceil(projects.value.length / itemsPerPage)
);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return projects.value.slice(start, end);
});

// Init GLightbox
onMounted(() => {
  GLightbox({
    selector: ".glightbox",
  });
});
</script>

<style scoped>
.portfolio-content {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  height: 100%;
}

.portfolio-content img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.portfolio-info {
  opacity: 0;
  background: rgba(0, 0, 0, 0.65);
  transition: all 0.4s ease;
  transform: translateY(25px);
  padding: 20px;
}

.portfolio-content:hover img {
  transform: scale(1.1);
}

.portfolio-content:hover .portfolio-info {
  opacity: 1;
  transform: translateY(0);
}

/* Ikon */
.portfolio-info i {
  font-size: 1.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.portfolio-info i:hover {
  transform: scale(1.2);
  color: #0dcaf0;
}

/* Pagination */
.custom-pagination {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.page-link {
  color: #0096a0;
  border: 1px solid #0096a0;
  border-radius: 8px;
  padding: 6px 14px;
  transition: all 0.3s;
  background-color: #fff;
}

.page-link.active,
.page-link:hover {
  background-color: #0096a0;
  color: #fff;
  border-color: #0096a0;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
  .portfolio-content img {
    height: 180px;
  }

  .portfolio-info h4 {
    font-size: 1.1rem;
  }

  .portfolio-info p {
    font-size: .85rem;
  }

  .portfolio-info i {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .portfolio-content img {
    height: 160px;
  }

  .portfolio-info {
    padding: 15px;
  }

  .portfolio-info h4 {
    font-size: 1rem;
  }

  .portfolio-info p {
    font-size: .8rem;
  }
}
</style>
