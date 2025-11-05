<template>
  <div style="min-height: 550px">
    <div class="container mt-2 py-5">
      <div class="row align-items-center mb-5">
        <div class="col-md-4 text-center">
          <img
            src="/logo.png"
            class="rounded-circle img-fluid profile-img"
            alt="Profile Photo"
          />
        </div>
        <div class="col-md-8">
          <h1 class="display-4">{{ name }}</h1>
          <p class="lead">{{ tagline }}</p>
          <p>{{ about }}</p>

          <div class="skills-container mt-4">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              :class="['skill-box', index % 2 === 0 ? 'dark' : 'light']"
            >
              {{ skill }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center"></div>
          <div class="col-md-8">
            <echart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Echart from "../views/resume/Ichart.vue";

const name = ref("Yadi Rahmat");
const tagline = ref("Fullstack Developer");
const about = ref(
  "A Software Developer with 2 year of experience building and maintaining Javascript (Vuejs Framework , PHP Laravel) web-based application for the Bogordistrict government. Proficient in solving problems and solving them complex technical problems. Also experienced with JavaScript, TypeScript, PHP, ReactJS, Laravel. me continuously looking for opportunities to expand my skills and contribute to innovative web development projects."
);

const skills = ref([
  "Javascript",
  "MySQL",
  "Express.Js",
  "Vue.Js",
  "Angular.Js",
  "React.Js",
]);
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.skill-box {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  min-width: 130px;
  background-color: #e8e6e3; /* warna default (light) */
  transition: background 0.3s ease;
}

.skill-box.dark {
  background-color: #8d8d9b; /* warna abu-abu gelap */
  color: #fff;
}

.skill-box.light {
  background-color: #e8e6e3; /* warna abu-abu muda */
  color: #000;
}
</style>
