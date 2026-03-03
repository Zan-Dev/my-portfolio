<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const filters = ['all', 'web', 'iot', 'fullstack']
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-inner">
      <SectionHeader label="Selected Work" title="Projects" />

      <!-- Filter tabs -->
      <div class="filters">
        <button
          v-for="f in filters"
          :key="f"
          class="filter-btn"          
        >
          {{ f.toUpperCase() }}
        </button>
      </div>

      <div class="projects-grid">
        <ProjectCard                    
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section { border-top: 1px solid var(--color-border); }

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  margin-top: -20px;
}
.filter-btn {
  padding: 8px 20px;
  font-size: 0.65rem;
  letter-spacing: 2px;
  background: transparent;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}
.filter-btn:hover,
.filter-btn--active {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
</style>
