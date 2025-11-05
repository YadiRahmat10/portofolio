<template>
  <div class="container mt-5 py-5">
    <div class="row g-4 align-items-start">
      <div class="col-md-6">
        <div class="card shadow-sm p-3 text-center">
          <img
            src="/sakip.png"
            alt="Logo SAKIP"
            class="img-fluid animated-img"
          />
        </div>
        <button class="btn btn-success btn-sm mt-3" @click="goBack">
          <i class="bi bi-arrow-left"></i> Kembali
        </button>
      </div>

      <div class="col-md-6">
        <div class="card shadow-sm p-4 mb-4">
          <h5 class="fw-bold">Information</h5>
          <hr />
          <table class="table table-borderless mb-0">
            <tbody>
              <tr>
                <td class="fw-bold" style="width: 150px">Name</td>
                <td>: SAKIP</td>
              </tr>
              <tr>
                <td class="fw-bold">Category</td>
                <td>: Web design</td>
              </tr>
              <tr>
                <td class="fw-bold">Project URL</td>
                <td>
                  <a href="https://sakip.bogorkab.go.id" target="_blank"
                    ><button class="btn btn-warning btn-sm rounded-3">
                      Link
                    </button></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card p-4 mb-4">
          <h4 class="fw-bold mb-3">Deskripsi :</h4>
          <p>
            Sakip adalah aplikasi Sistem Akuntabilitas Kinerja Instansi
            Pemerintah yang bertujuan untuk mengelola dan melaporkan kinerja
            instansi pemerintah secara elektronik, mulai dari perencanaan,
            penganggaran, hingga evaluasi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push({ path: "/projek/portofolio" });
};
</script>

<style scoped>
.animated-img {
  max-height: 350px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  animation: floating 3s ease-in-out infinite;
}

.animated-img:hover {
  transform: scale(1.1) rotate(3deg);
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
