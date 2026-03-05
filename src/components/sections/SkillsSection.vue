<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-inner">
      <SectionHeader label="Technical Expertise" title="My Skills" />
      <div class="skills-grid">
        <div                    
          v-for="skill in store.skills"
          :key="skill.id"
          class="skill-card"
          :style="{ '--cat-color': skill.color }"
        >
          <span class="skill-card__icon">{{ skill.icon }}</span>
          <p class="skill-card__category">{{ skill.category }}</p>
          <h3 class="skill-card__name">{{ skill.name }}</h3>
          <div class="skill-card__tags">
            <span v-for="tag in skill.tags" :key="tag" class="skill-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section { border-top: 1px solid var(--color-border); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.skill-card {
  background: var(--color-bg);
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: background var(--transition-base);
}
.skill-card:hover { background: var(--color-surface); }
.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cat-color), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}
.skill-card:hover::before { opacity: 1; }

.skill-card__icon   { font-size: 1.8rem; margin-bottom: 16px; display: block; }
.skill-card__category {
  font-size: 0.6rem; letter-spacing: 3px; text-transform: uppercase;
  color: var(--color-muted); margin-bottom: 8px;
}
.skill-card__name {
  font-family: var(--font-display);
  font-size: 1.1rem; font-weight: 700; margin-bottom: 16px;
}
.skill-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }

.skill-tag {
  font-size: 0.6rem; letter-spacing: 1px;
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  transition: all var(--transition-base);
}
.skill-card:hover .skill-tag {
  border-color: var(--cat-color);
  color: var(--cat-color);
}
</style>
