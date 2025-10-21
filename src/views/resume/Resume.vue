<template>
  <div class="container mt-5 py-5">
    <div class="card shadow-sm p-4 mb-4">
      <section id="resume" class="resume section">
        <h5 class="fw-bold text-center">Resume</h5>
        <hr />

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-6">
              <!-- Education -->
              <div class="resume-item">
                <h3 class="resume-title">Education</h3>
                <div class="resume-content">
                  <article class="education-item">
                    <h4>Universitas Komputer Indonesia</h4>
                    <h5>2015 - 2020</h5>
                    <p class="institution">
                      <em>Informatics Engineering</em>
                    </p>
                  </article>

                  <article class="education-item">
                    <h4>SMK Negeri 1 Garut</h4>
                    <h5>2013 - 2015</h5>
                    <p class="institution">
                      <em>Computer and Network Engineering</em>
                    </p>
                  </article>

                  <article class="education-item">
                    <h4>SDN 6 Kadungora</h4>
                    <h5>2008 - 2013</h5>
                    <p class="institution">
                      <em> - </em>
                    </p>
                  </article>
                </div>
              </div>

              <!-- Skills -->
              <div class="resume-item">
                <h3 class="resume-title">Professional Skills</h3>
                <div class="resume-content">
                  <div class="skill-item">
                    <h4>Frontend Development</h4>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 95%"
                      ></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <h4>Backend Development</h4>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 85%"
                      ></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <h4>UI/UX Design</h4>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 90%"
                      ></div>
                    </div>
                  </div>

                  <div class="skill-item">
                    <h4>Project Management</h4>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 80%"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience -->
            <div class="col-lg-6">
              <div class="resume-item">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-content">
                  <article class="experience-item">
                    <h4>PT Elima Firman Teknologi</h4>
                    <h5>2024 - Now</h5>
                    <p class="company"><em>Fullstack Developer</em></p>
                    <ul>
                      <li>Managed up to 6 projects</li>
                      <li>Delegate tasks to 4 team members</li>
                      <li>government project</li>
                      <li>Use : php, laravel, dan vue js</li>
                    </ul>
                  </article>

                  <article class="experience-item">
                    <h4>PT Maju Gemilang Indotech</h4>
                    <h5>2022 - 2023</h5>
                    <p class="company"><em>Frontend Developer</em></p>
                    <ul>
                      <li>Managed up to 6 more projects</li>
                      <li>Delegate tasks to 6 more team members</li>
                      <li>government project</li>
                      <li>Use : JavaScript, Angular, Nodejs</li>
                    </ul>
                  </article>

                  <article class="experience-item">
                    <h4>PDAM Tirta Intan Garut</h4>
                    <h5>Sep 2014 - Nov 2014</h5>
                    <p class="company"><em>Computer network</em></p>
                    <ul>
                      <li>Network cable pair</li>
                      <li>Fixing computer network</li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.resume-page {
  background-color: #ffffff; /* background putih */
  color: #000000; /* warna teks hitam */
  padding: 40px;
  border-radius: 10px;
}

/* Title Section */
.section-title h2 {
  font-weight: 700;
  font-size: 28px;
  color: #000000;
  position: relative;
  padding-bottom: 10px;
}

.section-title h2::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 3px;
  background: #000000; /* hitam */
  bottom: 0;
  left: 0;
}

/* Resume Items */
.resume-item {
  margin-bottom: 40px;
}

.resume-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #000000;
  position: relative;
}

.resume-content article {
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 2px solid #000000; /* garis aksen hitam */
}

.resume-content h4 {
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 5px;
}

.resume-content h5 {
  display: inline-block;
  background: #3dc19b; /* badge hitam */
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 5px;
  margin: 8px 0;
}

.resume-content p.institution,
.resume-content p.company {
  font-size: 14px;
  font-style: italic;
  color: #333333;
  margin-bottom: 10px;
}

.resume-content p {
  font-size: 14px;
  color: #444444;
}

.resume-content ul {
  list-style: none;
  padding-left: 0;
}

.resume-content ul li {
  font-size: 14px;
  color: #444444;
  margin-bottom: 6px;
  position: relative;
  padding-left: 18px;
}

.resume-content ul li::before {
  content: "•";
  color: #000000; /* bullet hitam */
  position: absolute;
  left: 0;
  font-size: 18px;
  line-height: 1;
}

/* Skills Section */
.skill-item {
  margin-bottom: 20px;
}

.skill-item h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000000;
}

.progress {
  background: #eaeaea;
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
}

.progress-bar {
  background-color: #3dc19b; /* progress bar hitam */
  height: 8px;
  border-radius: 6px;
}
</style>
