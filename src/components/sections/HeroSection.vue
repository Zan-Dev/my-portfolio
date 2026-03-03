<script setup>

</script>

<template>
    <section id="hero" class="hero">
        <div>
            <h1 class="hero_name">Ahmad Fauzan</h1>
        </div>
        
    </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 40px 80px;
  position: relative;
}

.hero__inner {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 60px;
}

.hero_tag {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-accent);
  border: 1px solid rgba(0, 229, 255, 0.3);
  padding: 6px 14px;
  margin-bottom: 28px;
  position: relative;
  animation: fadeInUp 0.6s ease both;
}
.hero_tag::before {
  content: '';
  position: absolute;
  top: -1px; left: -1px;
  width: 20px; height: 100%;
  border-top: 2px solid var(--color-accent);
  border-left: 2px solid var(--color-accent);
}
.hero_tag::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 20px; height: 100%;
  border-bottom: 2px solid var(--color-accent);
  border-right: 2px solid var(--color-accent);
}

.hero_name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -2px;
  animation: fadeInUp 0.6s 0.1s ease both;
  position: relative;
}

@media (max-width: 768px) {
  .hero { padding: 100px 20px 60px; }
  .hero_inner { grid-template-columns: 1fr; }
  .terminal { width: 100%; }
  .hero_status { gap: 12px; }
}

#hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0.5;
    animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.3; }
}


</style>