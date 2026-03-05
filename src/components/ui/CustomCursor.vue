<script setup>
import { computed } from 'vue'
import { useCursorStore } from '@/stores/cursor'

const cursor = useCursorStore()

const dotStyle = computed(() => ({
  left: cursor.x + 'px',
  top: cursor.y + 'px',
  transform: `translate(-50%, -50%) scale(${cursor.isClicking ? 1.5 : 1})`
}))

const ringStyle = computed(() => ({
  left: cursor.ringX + 'px',
  top: cursor.ringY + 'px',
  transform: `translate(-50%, -50%) scale(${cursor.isHovering ? 1.5 : 1})`,
  opacity: cursor.isHovering ? 0.8 : 0.5
}))
</script>

<template>
  <div class="cursor-dot" :style="dotStyle" />
  <div class="cursor-ring" :style="ringStyle" />
</template>

<style scoped>
.cursor-dot {
  position: fixed;
  width: 12px;
  height: 12px;
  background: var(--color-accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-cursor);
  transition: transform 0.1s ease;
  mix-blend-mode: screen;
}

.cursor-ring {
  position: fixed;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: calc(var(--z-cursor) - 1);
  transition: transform 0.15s ease, opacity 0.3s ease;
}

@media (max-width: 768px) {
  .cursor-dot,
  .cursor-ring {
    display: none;
  }
}
</style>
