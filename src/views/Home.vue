<template>
  <div class="bg-light text-dark">
    <div class="container py-5">
      <!-- Profile -->
      <div class="row align-items-center mb-5">
        <div class="col-md-4 text-center">
          <img
            src="/profile.jpg"
            class="rounded-circle img-fluid profile-img"
            alt="Profile Photo"
          />
        </div>
        <div class="col-md-8">
          <h1 class="display-4">hi {{ name }}</h1>
          <p class="lead">{{ tagline }}</p>
          <p>{{ about }}</p>
        </div>
      </div>

      <!-- Projects -->
      <div class="row mb-5">
        <div
          v-for="(project, index) in paginatedProjects"
          :key="index"
          class="col-md-4 mb-4"
        >
          <div class="card h-100 shadow anim">
            <img
              :src="project.image"
              class="card-img-top"
              :alt="project.title"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.desc }}</p>
              <router-link
                class="btn btn-success btn-sm w-100 mt-auto"
                :to="project.route"
              >
                Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation" class="d-flex justify-content-end">
        <ul class="pagination custom-pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage">&lt; Previous</button>
          </li>

          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="goToPage(page)">
              {{ page }}
            </button>
          </li>

          <li
            class="page-item"
            :class="{ disabled: currentPage === totalPages }"
          >
            <button class="page-link" @click="nextPage">Next &gt;</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref(" - ");
const tagline = ref("Fullstack Developer");
const about = ref(
  "A Software Developer with 2 year of experience building and maintaining Javascript (Vuejs Framework , PHP Laravel) web-based application for the Bogor district government. Proficient in solving problems and solving them complex technical problems. Also experienced with JavaScript, TypeScript, PHP, ReactJS, Laravel. me continuously looking for opportunities to expand my skills and contribute to innovative web development projects"
);

const projects = ref([
  {
    title: "SIMPEG",
    desc: "Sistem Informasi Manajemen Kepegawaian.",
    image: "/simpeg.jpg",
    route: "/projek/simpeg",
  },
  {
    title: "SICANTIK",
    desc: "Sistem Informasi Catatan Kehadiran dan Kinerja.",
    image: "/sicantik.jpg",
    route: "/projek/sicantik",
  },
  {
    title: "SIABANG",
    desc: "Sistem Informasi Administrasi Pembangunan yang digunakan oleh Pemerintah Kota Bogor untuk memonitor dan mengevaluasi pelaksanaan kegiatan fisik dan keuangan.",
    image: "/siabang.jpg",
    route: "/projek/siabang",
  },
  {
    title: "-",
    desc: "-",
    image: "/sicantik.jpg",
    route: "#",
  },
  {
    title: "-",
    desc: "-",
    image: "/sicantik.jpg",
    route: "#",
  },
]);

const currentPage = ref(1);
const itemsPerPage = 3;

const totalPages = computed(() =>
  Math.ceil(projects.value.length / itemsPerPage)
);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return projects.value.slice(start, end);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<style scoped>
.custom-pagination {
  display: flex;
  gap: 8px;
}

.custom-pagination .page-link {
  color: #0096a0;
  border: 1px solid #0096a0;
  margin: 0 3px;
  border-radius: 8px;
  padding: 6px 14px;
}

.custom-pagination .page-item.active .page-link {
  background-color: #0096a0;
  border-color: #0096a0;
  color: #fff;
}

.custom-pagination .page-item.disabled .page-link {
  color: #aaa;
  border-color: #ddd;
  pointer-events: none;
  background-color: #f8f9fa;
}

.custom-pagination .page-link:hover {
  background-color: #0096a0;
  color: #fff;
}
</style>
