<script setup lang="ts">
import { ref } from 'vue'

const navLinks= [
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' }
]

const menuOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar__logo">
      <span class="logo-icon">◈</span>ZAN.DEV
    </RouterLink>

    <!-- Desktop links -->
    <ul class="navbar__links">
      <li v-for="link in navLinks" :key="link.label">
        <a :href="link.href" class="navbar__link">{{ link.label }}</a>
      </li>
    </ul>

    <!-- Mobile toggle -->
    <button class="navbar__toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
      <span :class="{ open: menuOpen }">☰</span>
    </button>

    <!-- Mobile menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="navbar__link"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: var(--z-nav);
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(10, 10, 15, 0.95), transparent);
  backdrop-filter: blur(10px);
}

.navbar__logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-accent);
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-icon {
  animation: spin 4s linear infinite;
  display: inline-block;
}

.navbar__links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.navbar__link {
  color: var(--color-muted);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  transition: color var(--transition-base);
}
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}
.navbar__link:hover { color: var(--color-accent); }
.navbar__link:hover::after { width: 100%; }

.navbar__toggle {
  display: none;
  background: none;
  color: var(--color-text);
  font-size: 1.2rem;
}

.navbar__mobile {
  display: none;
  position: fixed;
  top: 60px; left: 0; right: 0;
  background: var(--color-bg);
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--color-border);
}
.navbar__mobile--open { display: flex; }

@media (max-width: 768px) {
  .navbar { padding: 16px 20px; }
  .navbar__links { display: none; }
  .navbar__toggle { display: block; }
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>
