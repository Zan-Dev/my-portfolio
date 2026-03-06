<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  href: {
    type: String,
    default: null
  }
})
</script>

<template>
  <a v-if="href" :href="href" class="btn" :class="`btn--${variant ?? 'primary'}`">
    <slot />
  </a>
  <button v-else class="btn" :class="`btn--${variant ?? 'primary'}`">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--transition-fast), transform var(--transition-fast),
    border-color var(--transition-base), color var(--transition-base);
  text-decoration: none;
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-bg);
  border: none;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}
.btn--primary:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
.btn--ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
