<template>
  <div class="home">
    <h1 class="home-title">Welcome to Bobr</h1>
    <p class="home-subtitle">The ultimate beaver appreciation project</p>
    <RouterLink to="/bobr" class="home-cta">
      Meet the Bobr →
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  text-align: center;
  padding: 2rem;
}

.home-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.home-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
}

.home-cta {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #8B6914, #D4A030);
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.home-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(212, 160, 48, 0.3);
}
</style>
