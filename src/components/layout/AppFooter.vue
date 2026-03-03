<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} <span class="accent">Ahmad Fauzan</span></p>
    <p>Built with <span class="accent">Vue 3</span> + <span class="accent">FastAPI</span></p>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: var(--z-base);
  font-size: 0.65rem;
  color: var(--color-muted);
  letter-spacing: 2px;
}

.accent { color: var(--color-accent); }

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    text-align: center;
  }
}
</style>
