<template>
  <div class="bobr-page">
    <h1 class="bobr-title">Bobr</h1>
    <p class="bobr-subtitle">Majestic. Industrious. Unstoppable.</p>
    <div class="bobr-card">
      <img
        src="@/assets/bobr.jpg"
        alt="A majestic beaver (bobr)"
        class="bobr-image"
        loading="lazy"
      />
      <div class="bobr-caption">
        <span class="bobr-emoji">🦫</span>
        <span>The North American Beaver in its natural habitat</span>
      </div>
    </div>
    <div class="bobr-facts">
      <h2>Fun Facts</h2>
      <ul>
        <li>Beavers are the second-largest living rodents after capybaras</li>
        <li>They can hold their breath for up to 15 minutes underwater</li>
        <li>A beaver's teeth never stop growing</li>
        <li>They build dams up to 850 meters long</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// Bobr page - the star of the show
</script>

<style scoped>
.bobr-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.bobr-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.bobr-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;
}

.bobr-card {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease;
}

.bobr-card:hover {
  transform: scale(1.01);
}

.bobr-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 500px;
}

.bobr-caption {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

.bobr-emoji {
  font-size: 1.4rem;
}

.bobr-facts {
  margin-top: 2.5rem;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.bobr-facts h2 {
  font-size: 1.5rem;
  color: #D4A030;
  margin-bottom: 1rem;
}

.bobr-facts ul {
  list-style: none;
  padding: 0;
}

.bobr-facts li {
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.05rem;
}

.bobr-facts li:last-child {
  border-bottom: none;
}

.bobr-facts li::before {
  content: "🦫 ";
}
</style>
