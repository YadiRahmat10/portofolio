<template>
  <footer class="text-center pt-4 mt-5">
    <p>Contact me:</p>
    <div>
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.url"
        class="mx-2 text-dark"
        target="_blank"
      >
        <i :class="social.icon" style="font-size: 1.5rem"></i>
      </a>
    </div>
    <p class="mt-3">&copy; 2025 {{ name }}. All rights are protected.</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const socials = ref([
  { icon: "bi bi-whatsapp", url: "https://wa.me//6289621284627" },
  { icon: "bi bi-linkedin", url: "https://www.linkedin.com/in/yadi-rahmat/" },
  { icon: "bi bi-github", url: "https://github.com/YadiRahmat10" },
]);

const name = "Yadi Rahmat";
</script>

<style scoped>
footer {
  padding: 20px;
  font-size: 14px;
}

a:hover i {
  color: #198754;
  transition: 0.3s;
}
</style>
