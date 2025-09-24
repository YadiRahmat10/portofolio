<template>
  <div class="container mt-5 py-5">
    <div class="card shadow-sm p-4 mb-4">
      <h5 class="fw-bold warna">Profile</h5>
      <hr />
      <div class="row">
        <!-- Kolom Kiri -->
        <div class="col">
          <div class="mb-3 text-center">
            <img src="/yadi.jpg" alt="Foto Yadi Rahmat" class="profile-img" />
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 250px">Name</div>
            <div>: Yadi Rahmat</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 250px">Study program</div>
            <div>: S1 Teknik Informatika</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 250px">Last education</div>
            <div>: Universitas Komputer Indonesia</div>
          </div>
        </div>

        <!-- Kolom Kanan -->
        <div class="col">
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 220px">Experience</div>
            <div>
              <a>: PT.Elima Firman Teknologi (2024 - Now)</a><br />
              <a>: PT.Maju Gemilang Indotech</a><br />
              <a>: PDAM Tirta Intan Garut (Sep 2014 - Nov 2014)</a><br />
            </div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 220px">Skill</div>
            <div>
              <a>: JavaScript</a><br />
              <a>: PHP</a><br />
              <a>: Laravel</a><br />
              <a>: Vue</a><br />
              <a>: Angular</a><br />
              <a>: React</a>
            </div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold warna" style="width: 220px">
              Educational background
            </div>
            <div>
              <a>: Universitas Komputer Indonesia</a><br />
              <a>: SMKN 1 Garut</a><br />
              <a>: SMP muhammadiyah 1 Kadungora</a><br />
              <a>: SDN 6 Karangmulya</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tombol kembali -->
    <div class="mt-4">
      <button class="btn btn-success btn-sm" @click="goBack">
        <i class="bi bi-arrow-left"></i> Kembali
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  router.push({ name: "Home" });
};
</script>

<style scoped>
.profile-img {
  width: 150px; /* ukuran lebih kecil */
  height: 150px;
  object-fit: cover;
  border-radius: 50%; /* membuat bulat */
  border: 3px solid #198754;
}

.warna {
  color: #198754;
}
</style>
