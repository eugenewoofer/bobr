<template>
  <div class="habitat-page">
    <h1 class="page-title">Beaver Habitat</h1>
    <p class="page-sub">Where beavers live and how they shape their environment</p>

    <div class="habitat-sections">
      <section class="habitat-card">
        <h2>Freshwater Ecosystems</h2>
        <p>Beavers are found in rivers, streams, ponds, and lakes across North America and Eurasia. They prefer slow-moving water with nearby deciduous trees, especially aspen, willow, birch, and poplar, which provide both food and building material.</p>
      </section>

      <section class="habitat-card">
        <h2>The Lodge</h2>
        <p>A beaver lodge is an engineering marvel. Built from sticks, mud, and rocks, it sits in the middle of a pond with underwater entrances that protect against predators. Inside, the living chamber stays above water level and is insulated enough to maintain warmth even in harsh winters.</p>
      </section>

      <section class="habitat-card">
        <h2>The Dam</h2>
        <p>Beavers build dams to create deep ponds around their lodge. The sound of running water triggers their building instinct. A typical dam is 1.5 meters high and 4.5 meters wide, though some exceed hundreds of meters in length. The dam slows water flow, reduces erosion, and creates rich wetland habitats.</p>
      </section>

      <section class="habitat-card">
        <h2>Canals</h2>
        <p>Beavers dig canals up to a meter wide to float food and building materials to their lodge. These waterways can extend hundreds of meters into the forest, allowing safe transport of heavy logs that would be impossible to drag overland.</p>
      </section>

      <section class="habitat-card">
        <h2>Geographic Range</h2>
        <p>North American beavers (Castor canadensis) range from Alaska to northern Mexico. Eurasian beavers (Castor fiber) are found across Europe and Asia, from the UK to Mongolia. Both species have been successfully reintroduced to many areas where they were previously hunted to extinction.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Habitat page
</script>

<style scoped>
.habitat-page {
  padding: 3rem 2.5rem;
  max-width: 800px;
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

.habitat-sections {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.habitat-card {
  padding: 1.75rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.habitat-card:hover {
  border-color: rgba(212,160,48,0.15);
}

.habitat-card h2 {
  font-size: 1.2rem;
  color: #D4A030;
  margin-bottom: 0.6rem;
}

.habitat-card p {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
}
</style>
