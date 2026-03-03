<script setup>
import AppNavbar from './AppNavbar.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div class="layout">
    <div class="grid-bg" aria-hidden="true" />
    <AppNavbar />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__main {
  flex: 1;
  position: relative;
  z-index: var(--z-base);
}
</style>
