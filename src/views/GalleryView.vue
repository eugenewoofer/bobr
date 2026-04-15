<template>
  <div class="gallery-page">
    <h1 class="page-title">Beaver Gallery</h1>
    <p class="page-sub">A collection of beaver scenes from around the world</p>
    <div class="gallery-grid">
      <div v-for="(item, i) in galleryItems" :key="i" class="gallery-card">
        <div class="gallery-thumb">
          <img :src="item.img" :alt="item.title" class="gallery-img" />
        </div>
        <div class="gallery-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import damBuilder from '@/assets/gallery/dam-builder.jpg'
import riverSwimmer from '@/assets/gallery/river-swimmer.jpg'
import barkFeast from '@/assets/gallery/bark-feast.jpg'
import lodge from '@/assets/gallery/lodge.jpg'
import winterBeaver from '@/assets/gallery/winter-beaver.jpg'
import beaverDusk from '@/assets/gallery/beaver-dusk.jpg'

const galleryItems = [
  { img: damBuilder, title: 'Dam Builder', desc: 'A beaver dam constructed from branches, mud and natural debris' },
  { img: riverSwimmer, title: 'River Swimmer', desc: 'An American beaver gliding through calm waters' },
  { img: barkFeast, title: 'Bark Feast', desc: 'A beaver enjoying a meal of fresh bark and branches' },
  { img: lodge, title: 'Beaver Lodge', desc: 'The cozy beaver home made of sticks, mud and grass' },
  { img: winterBeaver, title: 'Tree Cutter', desc: 'A beaver hard at work cutting down a tree with its powerful teeth' },
  { img: beaverDusk, title: 'Beaver Family', desc: 'A family of beavers near their creek habitat' },
]
</script>

<style scoped>
.gallery-page { padding: 3rem 2.5rem; max-width: 960px; margin: 0 auto; }
.page-title {
  font-size: 2.4rem; font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-bottom: 0.4rem;
}
.page-sub { color: rgba(255,255,255,0.45); font-size: 1.05rem; margin-bottom: 2.5rem; }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
.gallery-card {
  border-radius: 14px; overflow: hidden;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
  transition: all 0.25s ease;
}
.gallery-card:hover { border-color: rgba(212,160,48,0.2); transform: translateY(-3px); }
.gallery-thumb { height: 200px; overflow: hidden; }
.gallery-img { width: 100%; height: 100%; object-fit: cover; }
.gallery-info { padding: 1rem 1.25rem 1.25rem; }
.gallery-info h3 { font-size: 1.05rem; color: #D4A030; margin-bottom: 0.3rem; }
.gallery-info p { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.45; }

@media (max-width: 768px) {
  .gallery-page { padding: 4.5rem 1rem 2rem; }
  .page-title { font-size: 1.6rem; }
  .page-sub { font-size: 0.9rem; margin-bottom: 1.5rem; }
  .gallery-grid { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
  .gallery-thumb { height: 140px; }
  .gallery-info { padding: 0.75rem 1rem; }
  .gallery-info h3 { font-size: 0.92rem; }
  .gallery-info p { font-size: 0.8rem; }
}
@media (max-width: 400px) {
  .gallery-grid { grid-template-columns: 1fr; }
}
</style>
