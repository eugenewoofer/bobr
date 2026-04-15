<template>
  <nav class="navbar">
    <div class="nav-brand">
      <img class="nav-logo" src="@/assets/bobr-icon.svg" alt="Bobr" />
      <span class="nav-title">Bobr</span>
    </div>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/bobr" class="nav-link">Bobr</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-logo {
  width: 36px;
  height: 36px;
}

.nav-title {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8B6914, #D4A030);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.nav-link.router-link-active {
  background: rgba(139, 105, 20, 0.2);
  color: #D4A030;
}
</style>
