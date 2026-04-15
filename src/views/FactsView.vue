<template>
  <div class="facts-page">
    <h1 class="page-title">Fun Facts About Beavers</h1>
    <p class="page-sub">Prepare to be amazed by nature's greatest engineers</p>
    <div class="facts-list">
      <div v-for="(fact, i) in facts" :key="i" class="fact-card">
        <span class="fact-num">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="fact-body">
          <h3>{{ fact.title }}</h3>
          <p>{{ fact.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const facts = [
  { title: 'Giant Teeth', text: 'Beaver teeth are orange because they contain iron, which makes them incredibly strong. They never stop growing, so beavers must gnaw constantly to keep them trimmed.' },
  { title: 'Underwater Architects', text: 'Beavers can hold their breath for up to 15 minutes. They have transparent eyelids that act as goggles, letting them see perfectly underwater.' },
  { title: 'Record-Breaking Dams', text: 'The longest beaver dam ever discovered is 850 meters long, located in northern Alberta, Canada. It is visible from space.' },
  { title: 'Ecosystem Engineers', text: 'Beaver ponds increase biodiversity by 33 percent. Their dams create wetlands that support fish, birds, amphibians, and countless plant species.' },
  { title: 'Tail Communication', text: 'When a beaver slaps its tail on water, the sound can be heard over half a kilometer away. It warns the entire colony of danger instantly.' },
  { title: 'Family-Oriented', text: 'Beaver families typically include parents and two generations of offspring. Young beavers stay with their parents for about two years, learning construction skills.' },
  { title: 'Night Owls', text: 'Beavers are primarily nocturnal. They are most active between sunset and sunrise, spending the night building, foraging, and maintaining their dams.' },
  { title: 'Historical Impact', text: 'The beaver fur trade shaped North American history for over 200 years. Beaver pelts were once used as currency and drove European exploration of the continent.' },
]
</script>

<style scoped>
.facts-page {
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

.facts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fact-card {
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.fact-card:hover {
  border-color: rgba(212,160,48,0.15);
  background: rgba(139,105,20,0.06);
}

.fact-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: rgba(212,160,48,0.25);
  min-width: 48px;
  line-height: 1;
  padding-top: 4px;
}

.fact-body h3 {
  font-size: 1.1rem;
  color: #D4A030;
  margin-bottom: 0.4rem;
}

.fact-body p {
  font-size: 0.92rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.55;
}
</style>
