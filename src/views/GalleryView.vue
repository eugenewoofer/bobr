<template>
  <div class="gallery-page">
    <h1 class="page-title">Beaver Gallery</h1>
    <p class="page-sub">A collection of beaver scenes from around the world</p>
    <div class="gallery-grid">
      <div v-for="(item, i) in galleryItems" :key="i" class="gallery-card">
        <div class="gallery-thumb" :style="{ background: item.bg }">
          <span class="gallery-emoji" v-html="item.icon"></span>
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
const galleryItems = [
  { icon: '&#x1F9AB;', title: 'Dam Builder', desc: 'A beaver constructing its signature dam from branches and mud', bg: 'linear-gradient(135deg, #2d1f0e, #4a3520)' },
  { icon: '&#x1F30A;', title: 'River Swimmer', desc: 'Gliding through calm waters with its flat tail steering', bg: 'linear-gradient(135deg, #0e2d3d, #1a4a5a)' },
  { icon: '&#x1F33F;', title: 'Bark Feast', desc: 'Gnawing on fresh willow bark - a beaver favorite meal', bg: 'linear-gradient(135deg, #1a2d0e, #2d4a1a)' },
  { icon: '&#x1F3E1;', title: 'Lodge Interior', desc: 'Inside the cozy lodge: mud walls, wood floor, dry and warm', bg: 'linear-gradient(135deg, #2d1a0e, #4a2d1a)' },
  { icon: '&#x2744;&#xFE0F;', title: 'Winter Beaver', desc: 'Surviving under ice with a food cache of sunken branches', bg: 'linear-gradient(135deg, #1a2a3d, #2d4a6a)' },
  { icon: '&#x1F31F;', title: 'Beaver at Dusk', desc: 'Most active at twilight - the golden hour of beaver activity', bg: 'linear-gradient(135deg, #3d2d0e, #6a4a1a)' },
]
</script>

<style scoped>
.gallery-page {
  padding: 3rem 2.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.4rem;
}

.page-sub {
  color: rgba(255,255,255,0.45);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.gallery-card {
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  transition: all 0.25s ease;
}

.gallery-card:hover {
  border-color: rgba(212,160,48,0.2);
  transform: translateY(-3px);
}

.gallery-thumb {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-emoji {
  font-size: 3.5rem;
}

.gallery-info {
  padding: 1rem 1.25rem 1.25rem;
}

.gallery-info h3 {
  font-size: 1.05rem;
  color: #D4A030;
  margin-bottom: 0.3rem;
}

.gallery-info p {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.45;
}
</style>
