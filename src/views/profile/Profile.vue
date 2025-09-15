<template>
  <div class="container mt-5 py-5">
    <div class="card shadow-sm p-4 mb-4">
      <h5 class="fw-bold">Biodata :</h5>
      <hr />
      <div class="row">
        <!-- Kolom Kiri -->
        <div class="col">
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Name</div>
            <div>: Yadi Rahmat</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Pendidikan</div>
            <div>: S1 Teknik Informatika</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Asal Universitas</div>
            <div>: Universitas Komputer Indonesia</div>
          </div>
        </div>

        <!-- Kolom Kanan -->
        <div class="col">
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Name</div>
            <div>: Yadi Rahmat</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Pendidikan</div>
            <div>: S1 Teknik Informatika</div>
          </div>
          <div class="mb-2 d-flex">
            <div class="fw-bold" style="width: 150px">Asal Universitas</div>
            <div>: Universitas Komputer Indonesia</div>
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

<style scoped></style>
