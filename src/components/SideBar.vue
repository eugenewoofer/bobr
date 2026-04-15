<template>
  <aside class="sidebar">
    <div class="sidebar-brand">
      <img class="sidebar-logo" src="@/assets/bobr-icon.svg" alt="Bobr" />
      <span class="sidebar-title">Bobr</span>
    </div>
    <nav class="sidebar-nav">
      <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path" class="sidebar-link">
        <span class="sidebar-icon" v-html="item.icon"></span>
        <span class="sidebar-label">{{ item.label }}</span>
      </RouterLink>
    </nav>
    <div class="sidebar-footer">
      <span class="sidebar-copy">Bobr Project 2026</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const menuItems = [
  { path: '/', icon: '&#x1F3E0;', label: 'Home' },
  { path: '/bobr', icon: '&#x1F4F7;', label: 'Bobr' },
  { path: '/gallery', icon: '&#x1F5BC;&#xFE0F;', label: 'Gallery' },
  { path: '/facts', icon: '&#x1F4A1;', label: 'Fun Facts' },
  { path: '/habitat', icon: '&#x1F332;', label: 'Habitat' },
  { path: '/species', icon: '&#x1F4D6;', label: 'Species' },
]
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background: rgba(18, 16, 28, 0.97);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow-y: auto;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.25rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-logo {
  width: 40px;
  height: 40px;
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 1rem 0.75rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
}

.sidebar-link.router-link-exact-active {
  background: rgba(139, 105, 20, 0.2);
  color: #D4A030;
  border: 1px solid rgba(212, 160, 48, 0.15);
}

.sidebar-icon {
  font-size: 1.2rem;
  width: 28px;
  text-align: center;
}

.sidebar-label {
  white-space: nowrap;
}

.sidebar-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-copy {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.25);
}
</style>
