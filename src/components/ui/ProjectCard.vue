<script setup>
defineProps({
  project: {
    type: Object,
    required: true,    
  },
  index: {
    type: Number,
    required: true,    
  }
})
</script>

<template>
  <article class="project-card">
    <div class="project-card__header">
      <span class="badge" :class="`badge--${project.type}`">{{ project.type.toUpperCase() }}</span>
      <span class="project-card__num">0{{ index + 1 }}</span>
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>
      <div class="project-card__stack">
        <span v-for="s in project.stack" :key="s" class="stack-tag">{{ s }}</span>
      </div>
    </div>
    <div class="project-card__footer">
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link">
        Live Demo →
      </a>
      <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link project-link--muted">
        GitHub ↗
      </a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  overflow: hidden;
  transition: border-color var(--transition-base), transform var(--transition-base);
}
.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.project-card__header {
  padding: 24px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge {
  font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase;
  padding: 4px 10px; border: 1px solid;
}
.badge--web      { color: var(--color-accent);  border-color: rgba(0, 229, 255, 0.3); }
.badge--iot      { color: var(--color-accent3); border-color: rgba(249, 115, 22, 0.3); }
.badge--fullstack{ color: var(--color-accent2); border-color: rgba(124, 58, 237, 0.3); }

.project-card__num { font-size: 0.65rem; color: var(--color-muted); }

.project-card__body { padding: 24px; }
.project-card__title {
  font-family: var(--font-display);
  font-size: 1.2rem; font-weight: 700;
  margin-bottom: 10px;
}
.project-card__desc {
  font-size: 0.78rem; color: var(--color-muted);
  line-height: 1.7; margin-bottom: 20px;
}
.project-card__stack { display: flex; flex-wrap: wrap; gap: 6px; }
.stack-tag {
  font-size: 0.6rem; padding: 3px 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  color: var(--color-muted);
}

.project-card__footer {
  padding: 16px 24px;
  border-top: 1px solid var(--color-border);
  display: flex; justify-content: space-between; align-items: center;
}
.project-link {
  font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--color-accent);
  display: flex; align-items: center; gap: 6px;
  transition: gap var(--transition-fast);
}
.project-link:hover { gap: 10px; }
.project-link--muted { color: var(--color-muted); }
</style>
