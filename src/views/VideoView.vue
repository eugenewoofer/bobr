<template>
  <div class="video-page">
    <h1 class="video-title">Beaver Videos</h1>
    <p class="video-subtitle">Watch amazing beaver footage from around the world</p>
    <div class="video-grid">
      <div class="video-card" v-for="video in videos" :key="video.id">
        <div class="video-wrapper">
          <iframe
            :src="`https://www.youtube.com/embed/${video.id}`"
            :title="video.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-info">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const videos = [
  {
    id: "iyNA62FrKCE",
    title: "Beavers: The Master Builders",
    description: "See how beavers construct elaborate dams and lodges, transforming entire landscapes with their engineering skills."
  },
  {
    id: "N7sEqG0ByBs",
    title: "How Beavers Build Dams",
    description: "A detailed look at the step-by-step process beavers use to fell trees, transport logs, and seal their dams."
  },
  {
    id: "dX-MhRiwkfY",
    title: "Beaver vs. River: Nature's Engineers",
    description: "Watch a family of beavers battle against a fast-flowing river to build the perfect dam for their lodge."
  },
  {
    id: "KRVNSwF3Mgo",
    title: "Baby Beavers: First Swim",
    description: "Adorable footage of baby beavers learning to swim and exploring the world outside their lodge for the first time."
  },
  {
    id: "PLyBZ1mdg2c",
    title: "The Beaver: Ecosystem Engineer",
    description: "Discover why scientists call beavers ecosystem engineers and how their work benefits hundreds of other species."
  }
]
</script>

<style scoped>
.video-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.video-title {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.video-subtitle {
  color: rgba(255,255,255,0.5);
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.video-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.video-card {
  background: rgba(30, 26, 40, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.video-card:hover {
  transform: translateY(-2px);
  border-color: rgba(212,160,48,0.25);
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background: #000;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: 1.25rem 1.5rem;
}

.video-info h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin-bottom: 0.4rem;
}

.video-info p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .video-page {
    padding: 1.5rem 1rem;
  }
  .video-title {
    font-size: 1.6rem;
  }
  .video-info {
    padding: 1rem;
  }
}
</style>
