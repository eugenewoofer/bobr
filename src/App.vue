<template>
  <NavBar />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 64px);
}
</style>
