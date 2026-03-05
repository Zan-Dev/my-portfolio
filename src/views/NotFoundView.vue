<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div class="not-found">
    <p class="not-found__code">404</p>
    <h1 class="not-found__title">Page Not Found</h1>
    <p class="not-found__desc">// The page you're looking for doesn't exist.</p>
    <BaseButton href="/">Go Home</BaseButton>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  padding: 40px;
}
.not-found__code {
  font-family: var(--font-display);
  font-size: 8rem;
  font-weight: 800;
  color: var(--color-accent);
  opacity: 0.3;
  line-height: 1;
}
.not-found__title {
  font-family: var(--font-display);
  font-size: 2rem;
}
.not-found__desc {
  color: var(--color-muted);
  font-size: 0.85rem;
  margin-bottom: 16px;
}
</style>
