<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>

<template>
  <section id="about" class="about-section">
    <div class="section-inner">
      <SectionHeader label="Background" title="About Me" />
      <div class="about-grid">
        <!-- Bio + Stats -->
        <div>
          <div class="about-text">
            <p>
              Saya adalah seorang <strong>Web Developer & IoT Engineer</strong> yang passionate
              membangun sistem yang menjembatani dunia digital dan fisik.
            </p>
            <p>
              Dengan pengalaman di <strong>Vue.js, FastAPI,</strong> dan ekosistem IoT (ESP32, MQTT,
              InfluxDB), saya merancang solusi end-to-end — dari antarmuka real-time hingga firmware
              sensor yang berjalan di edge device.
            </p>
            <p>
              Saat tidak coding, saya berkontribusi ke open source, mengeksplorasi protokol
              komunikasi baru, dan menulis artikel teknis seputar sistem terdistribusi.
            </p>
          </div>

          <div class="stats-grid">
            <div v-for="stat in store.stats" :key="stat.label" class="stat-box">
              <span class="stat-box__value">{{ stat.value }}</span>
              <span class="stat-box__label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Tech bars -->
        <div>
          <p class="section-label" style="margin-bottom: 24px">Tech Proficiency</p>
          <div class="tech-bars">
             <div v-for="t in store.techBars" :key="t.name" class="tech-row">
              <span class="tech-label">{{ t.name }}</span>
              <div class="tech-bar">
                <div
                  class="tech-fill"
                  :style="{ width: t.percentage + '%', background: t.color }"
                />
              </div>
              <span class="tech-pct">{{ t.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section { border-top: 1px solid var(--color-border); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.about-text p {
  font-size: 0.85rem; line-height: 1.9; color: var(--color-muted);
  margin-bottom: 16px;
}
.about-text strong { color: var(--color-text); }

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  margin-top: 40px;
}
.stat-box {
  background: var(--color-bg); padding: 24px;
  display: flex; flex-direction: column;
}
.stat-box__value {
  font-family: var(--font-display);
  font-size: 2.5rem; font-weight: 800;
  color: var(--color-accent);
}
.stat-box__label {
  font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--color-muted); margin-top: 4px;
}

.tech-bars { display: flex; flex-direction: column; gap: 16px; }
.tech-row  { display: flex; align-items: center; gap: 12px; }
.tech-label { font-size: 0.7rem; color: var(--color-muted); width: 100px; flex-shrink: 0; }
.tech-bar {
  flex: 1; height: 4px;
  background: var(--color-border);
  position: relative;
}
.tech-fill {
  position: absolute; top: 0; left: 0;
  height: 100%;
  transition: width 1.5s ease;
}
.tech-pct { font-size: 0.65rem; color: var(--color-muted); width: 32px; text-align: right; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
