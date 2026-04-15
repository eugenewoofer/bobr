<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-title">Welcome to Bobr</h1>
      <p class="hero-sub">Your guide to the fascinating world of beavers</p>
    </div>
    <div class="cards">
      <RouterLink to="/bobr" class="card">
        <img src="@/assets/bobr.jpg" alt="Meet the Bobr" class="card-img" />
        <h3>Meet the Bobr</h3>
        <p>See a real beaver up close</p>
      </RouterLink>
      <RouterLink to="/gallery" class="card">
        <img src="@/assets/gallery/dam-builder.jpg" alt="Gallery" class="card-img" />
        <h3>Gallery</h3>
        <p>Beautiful beaver scenes</p>
      </RouterLink>
      <RouterLink to="/facts" class="card">
        <img src="@/assets/gallery/bark-feast.jpg" alt="Fun Facts" class="card-img" />
        <h3>Fun Facts</h3>
        <p>Surprising beaver trivia</p>
      </RouterLink>
      <RouterLink to="/habitat" class="card">
        <img src="@/assets/gallery/lodge.jpg" alt="Habitat" class="card-img" />
        <h3>Habitat</h3>
        <p>Where beavers live</p>
      </RouterLink>
      <RouterLink to="/species" class="card">
        <img src="@/assets/gallery/winter-beaver.jpg" alt="Species" class="card-img" />
        <h3>Species</h3>
        <p>Types of beavers worldwide</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  padding: 3rem 2.5rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.hero-sub {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.5);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  text-decoration: none;
  color: rgba(255,255,255,0.8);
  transition: all 0.25s ease;
  overflow: hidden;
}

.card:hover {
  background: rgba(139,105,20,0.1);
  border-color: rgba(212,160,48,0.2);
  transform: translateY(-4px);
}

.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card h3 {
  font-size: 1.1rem;
  color: #D4A030;
  margin: 0.75rem 0 0.4rem;
  padding: 0 1rem;
}

.card p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.45);
  padding: 0 1rem 1rem;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .home {
    padding: 4.5rem 1.25rem 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-sub {
    font-size: 0.95rem;
  }

  .hero {
    margin-bottom: 2rem;
  }

  .cards {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .card-img {
    height: 120px;
  }

  .card h3 {
    font-size: 0.95rem;
  }
}

@media (max-width: 400px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
