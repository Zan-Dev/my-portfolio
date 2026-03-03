<script setup>

const links = [
  { label: 'Email', icon: '✉', href: 'mailto:a.fauzan.idn@gmail.com' },
  { label: 'LinkedIn', icon: '⌂', href: 'https://linkedin.com', external: true },
  { label: 'GitHub', icon: '◈', href: 'https://github.com', external: true },
  { label: 'Resume', icon: '◻', href: '/resume.pdf', external: true }
]
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="section-inner">
      <div class="contact-inner">
        <h2 class="contact-title">
          Let's <span class="accent">Build</span><br />Together.
        </h2>
        <p class="contact-sub">
          Punya proyek web atau IoT yang menarik? Atau sekedar ingin diskusi soal arsitektur sistem?
          Mari terhubung.
        </p>
        <div class="contact-links">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="contact-link"
          >
            {{ link.icon }} {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { border-top: 1px solid var(--color-border); }

.section-inner { padding: 120px 40px; }

.contact-inner {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.1;
  margin-bottom: 24px;
}
.accent { color: var(--color-accent); }

.contact-sub {
  font-size: 0.8rem;
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.contact-link {
  padding: 12px 24px;
  border: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: border-color var(--transition-base), color var(--transition-base);
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}
.contact-link:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
