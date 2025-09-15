<template>
  <div class="container py-5">
    <div class="row g-4 align-items-start">
      <div class="col-md-6">
        <div class="card shadow-sm p-3 text-center">
          <img
            src="/sicantik.jpg"
            alt="Logo SICANTIK"
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
                <td>
                  : SICANTIK (Sistem Informasi Kehadiran Elektronik dan Kinerja)
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Category</td>
                <td>: Web design</td>
              </tr>
              <tr>
                <td class="fw-bold">Project URL</td>
                <td>
                  <a href="https://sicantik.bogorkab.go.id" target="_blank"
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
            SiCANTIK (Sistem Informasi Kehadiran Elektronik dan Kinerja) untuk
            Pemerintah Kabupaten Bogor adalah aplikasi berbasis Android yang
            digunakan untuk mencatat kehadiran dan laporan kinerja Pegawai
            Negeri Sipil (PNS) secara real-time menggunakan teknologi GPS, serta
            menjadi sarana informasi dan komunikasi kepegawaian. Aplikasi ini
            bertujuan untuk mempermudah monitoring disiplin dan kinerja ASN,
            serta menyediakan informasi terkait data pendidikan, kepangkatan,
            dan pengembangan kompetensi.
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
  router.push({ name: "Home" });
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
