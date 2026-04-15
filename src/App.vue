<template>
  <div class="container">
    <h1>Hello World!</h1>
    <p>Welcome to Vue.js 3</p>
  </div>
</template>

<script setup>
// Vue 3 Composition API
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
  background: #1a1a2e;
  color: #eee;
}

h1 {
  font-size: 3rem;
  background: linear-gradient(135deg, #42d392, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.2rem;
  opacity: 0.7;
}
</style>
