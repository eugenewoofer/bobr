<template>
  <div>
    <!-- Hamburger button (mobile only) -->
    <button class="hamburger" :class="{ open: isOpen }" @click="toggle" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Overlay (mobile only) -->
    <div class="sidebar-overlay" :class="{ visible: isOpen }" @click="close"></div>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ open: isOpen }">
      <div class="sidebar-brand">
        <img class="sidebar-logo" src="@/assets/bobr-icon.svg" alt="Bobr" />
        <span class="sidebar-title">Bobr</span>
      </div>
      <nav class="sidebar-nav">
        <RouterLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="sidebar-link"
          @click="close"
        >
          <span class="sidebar-icon" v-html="item.icon"></span>
          <span class="sidebar-label">{{ item.label }}</span>
        </RouterLink>
      </nav>
      <div class="sidebar-footer">
        <span class="sidebar-copy">Bobr Project 2026</span>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isOpen = ref(false)
const router = useRouter()

const menuItems = [
  { path: '/', icon: '&#x1F3E0;', label: 'Home' },
  { path: '/bobr', icon: '&#x1F4F7;', label: 'Bobr' },
  { path: '/gallery', icon: '&#x1F5BC;&#xFE0F;', label: 'Gallery' },
  { path: '/facts', icon: '&#x1F4A1;', label: 'Fun Facts' },
  { path: '/habitat', icon: '&#x1F332;', label: 'Habitat' },
  { path: '/species', icon: '&#x1F4D6;', label: 'Species' },
  { path: '/video', icon: '&#x1F3AC;', label: 'Video' },
]

function toggle() { isOpen.value = !isOpen.value }
function close() { isOpen.value = false }

// Close sidebar on route change (for mobile)
watch(() => router.currentRoute.value.path, () => { close() })
</script>

<style scoped>
/* ===== Hamburger Button ===== */
.hamburger {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 200;
  background: rgba(18, 16, 28, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #D4A030;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== Overlay ===== */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.sidebar-overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

/* ===== Sidebar ===== */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background: rgba(18, 16, 28, 0.97);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow-y: auto;
  transition: transform 0.3s ease;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.25rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
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
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.9);
}

.sidebar-link.router-link-exact-active {
  background: rgba(139,105,20,0.2);
  color: #D4A030;
  border: 1px solid rgba(212,160,48,0.15);
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
  border-top: 1px solid rgba(255,255,255,0.06);
}

.sidebar-copy {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.25);
}

/* ===== Mobile: < 768px ===== */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>
