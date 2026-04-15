<template>
  <div class="species-page">
    <h1 class="page-title">Beaver Species</h1>
    <p class="page-sub">Meet the two living species of the genus Castor</p>
    <div class="species-cards">
      <div class="species-card">
        <div class="species-header">
          <h2>North American Beaver</h2>
          <span class="species-latin">Castor canadensis</span>
        </div>
        <div class="species-stats">
          <div class="stat"><span class="stat-label">Weight</span><span class="stat-val">11 - 32 kg</span></div>
          <div class="stat"><span class="stat-label">Length</span><span class="stat-val">74 - 90 cm</span></div>
          <div class="stat"><span class="stat-label">Tail</span><span class="stat-val">20 - 35 cm</span></div>
          <div class="stat"><span class="stat-label">Lifespan</span><span class="stat-val">10 - 15 years</span></div>
          <div class="stat"><span class="stat-label">Population</span><span class="stat-val">~15 million</span></div>
          <div class="stat"><span class="stat-label">Status</span><span class="stat-val status-lc">Least Concern</span></div>
        </div>
        <p class="species-desc">The larger of the two species. Found throughout Canada, the United States, and parts of northern Mexico. Once numbering over 100 million before the fur trade reduced their population to near extinction.</p>
      </div>
      <div class="species-card">
        <div class="species-header">
          <h2>Eurasian Beaver</h2>
          <span class="species-latin">Castor fiber</span>
        </div>
        <div class="species-stats">
          <div class="stat"><span class="stat-label">Weight</span><span class="stat-val">11 - 30 kg</span></div>
          <div class="stat"><span class="stat-label">Length</span><span class="stat-val">73 - 100 cm</span></div>
          <div class="stat"><span class="stat-label">Tail</span><span class="stat-val">25 - 37 cm</span></div>
          <div class="stat"><span class="stat-label">Lifespan</span><span class="stat-val">7 - 8 years</span></div>
          <div class="stat"><span class="stat-label">Population</span><span class="stat-val">~1.2 million</span></div>
          <div class="stat"><span class="stat-label">Status</span><span class="stat-val status-lc">Least Concern</span></div>
        </div>
        <p class="species-desc">Native to Europe and Asia. Nearly hunted to extinction by the early 20th century. Reintroduction programs across Europe have been tremendously successful.</p>
      </div>
    </div>
    <div class="comparison">
      <h2>Key Differences</h2>
      <div class="comp-table-wrap">
        <table class="comp-table">
          <thead>
            <tr><th>Feature</th><th>North American</th><th>Eurasian</th></tr>
          </thead>
          <tbody>
            <tr><td>Skull shape</td><td>Wider, shorter</td><td>Narrower, longer</td></tr>
            <tr><td>Tail shape</td><td>Wider, more oval</td><td>Narrower, elongated</td></tr>
            <tr><td>Nasal bones</td><td>Triangular</td><td>Square</td></tr>
            <tr><td>Chromosomes</td><td>40</td><td>48</td></tr>
            <tr><td>Dam building</td><td>Very common</td><td>Less frequent</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.species-page { padding: 3rem 2.5rem; max-width: 860px; margin: 0 auto; }
.page-title {
  font-size: 2.4rem; font-weight: 800;
  background: linear-gradient(135deg, #8B6914, #D4A030, #F0C050);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  margin-bottom: 0.4rem;
}
.page-sub { color: rgba(255,255,255,0.45); font-size: 1.05rem; margin-bottom: 2.5rem; }
.species-cards { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }
.species-card {
  padding: 2rem; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06); border-radius: 14px;
}
.species-header { margin-bottom: 1.25rem; }
.species-header h2 { font-size: 1.4rem; color: #D4A030; margin-bottom: 0.2rem; }
.species-latin { font-size: 0.9rem; color: rgba(255,255,255,0.35); font-style: italic; }
.species-stats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem;
}
.stat {
  display: flex; flex-direction: column; gap: 0.2rem;
  padding: 0.6rem 0.8rem; background: rgba(255,255,255,0.02);
  border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);
}
.stat-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.35); }
.stat-val { font-size: 0.95rem; color: rgba(255,255,255,0.8); font-weight: 600; }
.status-lc { color: #4ade80; }
.species-desc { font-size: 0.92rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
.comparison {
  padding: 2rem; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06); border-radius: 14px;
}
.comparison h2 { font-size: 1.3rem; color: #D4A030; margin-bottom: 1.25rem; }
.comp-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.comp-table { width: 100%; border-collapse: collapse; min-width: 400px; }
.comp-table th {
  text-align: left; padding: 0.7rem 1rem; font-size: 0.82rem;
  text-transform: uppercase; letter-spacing: 0.04em; color: rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.comp-table td {
  padding: 0.65rem 1rem; font-size: 0.92rem; color: rgba(255,255,255,0.65);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.comp-table tr:last-child td { border-bottom: none; }

@media (max-width: 768px) {
  .species-page { padding: 4.5rem 1rem 2rem; }
  .page-title { font-size: 1.6rem; }
  .page-sub { font-size: 0.9rem; margin-bottom: 1.5rem; }
  .species-card { padding: 1.25rem; }
  .species-header h2 { font-size: 1.15rem; }
  .species-stats { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
  .stat { padding: 0.5rem 0.6rem; }
  .stat-val { font-size: 0.85rem; }
  .species-desc { font-size: 0.85rem; }
  .comparison { padding: 1.25rem; }
  .comparison h2 { font-size: 1.1rem; }
  .comp-table th, .comp-table td { padding: 0.5rem 0.6rem; font-size: 0.82rem; }
}
</style>
