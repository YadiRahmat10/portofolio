<template>
  <div class="container mt-5 py-5">
    <button class="btn btn-success btn-sm mt-3" @click="goBack">
      <i class="bi bi-arrow-left"></i> Kembali
    </button>
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
