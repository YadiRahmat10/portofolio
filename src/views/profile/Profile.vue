<template>
  <div class="container mt-5 py-5">
    <div class="card shadow-sm p-4 mb-4">
      <h5 class="fw-bold warna">Profile</h5>
      <hr />
      <div class="row">
        <!-- Kolom Kiri -->
        <div class="col-12 col-md-6">
          <div class="mb-3 text-center">
            <img src="/yadi.jpg" alt="Foto Yadi Rahmat" class="profile-img" />
          </div>

          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Name</div>
            <div class="col-7">: Yadi Rahmat</div>
          </div>
          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Study program</div>
            <div class="col-7">: S1 Teknik Informatika</div>
          </div>
          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Last education</div>
            <div class="col-7">: Universitas Komputer Indonesia</div>
          </div>
        </div>

        <!-- Kolom Kanan -->
        <div class="col-12 col-md-6">
          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Experience</div>
            <div class="col-7">
              <div>: PT.Elima Firman Teknologi (2024 - Now)</div>
              <div>: PT.Maju Gemilang Indotech</div>
              <div>: PDAM Tirta Intan Garut (Sep 2014 - Nov 2014)</div>
            </div>
          </div>

          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Skill</div>
            <div class="col-7">
              <div>: JavaScript</div>
              <div>: PHP</div>
              <div>: Laravel</div>
              <div>: Vue</div>
              <div>: Angular</div>
              <div>: React</div>
            </div>
          </div>

          <div class="mb-2 row">
            <div class="col-5 fw-bold warna">Educational background</div>
            <div class="col-7">
              <div>: Universitas Komputer Indonesia</div>
              <div>: SMKN 1 Garut</div>
              <div>: SMP Muhammadiyah 1 Kadungora</div>
              <div>: SDN 6 Karangmulya</div>
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
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #198754;
}

.warna {
  color: #000000;
}
</style>
