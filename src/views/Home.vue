<template>
  <div style="min-height: 550px;">
    <div class="container mt-5 py-5">
      <div class="row align-items-center mb-5">
        <div class="col-md-4 text-center">
          <img
            src="/profile.jpg"
            class="rounded-circle img-fluid profile-img"
            alt="Profile Photo"
          />
        </div>
        <div class="col-md-8">
          <h1 class="display-4">{{ name }}</h1>
          <p class="lead">{{ tagline }}</p>
          <p>{{ about }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const name = ref(" Yadi Rahmat");
const tagline = ref("Fullstack Developer");
const about = ref(
  "A Software Developer with 2 year of experience building and maintaining Javascript (Vuejs Framework , PHP Laravel) web-based application for the Bogordistrict government. Proficient in solving problems and solving them complex technical problems. Also experienced with JavaScript, TypeScript, PHP, ReactJS, Laravel. me continuously looking for opportunities to expand my skills and contribute to innovative web development projects"
);
</script>

<style scoped></style>
