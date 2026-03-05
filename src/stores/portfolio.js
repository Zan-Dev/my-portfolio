import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  // ── State ──────────────────────────────────────────────
  const activeFilter = ref('all')
  const isLoading = ref(false)

  // ── Data ───────────────────────────────────────────────
  const skills = [
    {
      id: 'frontend',
      icon: '⬡',
      category: 'Frontend',
      name: 'Vue.js Ecosystem',
      color: '#00e5ff',
      tags: ['Vue 3', 'Pinia', 'Vue Router', 'Vite', 'JavaScript', 'Tailwind CSS']
    }
  ]

  const projects = [
    {
      id: 'smart-building',
      title: 'Smart Building Monitor',
      type: 'fullstack',
      description:
        'Sistem monitoring gedung real-time dengan 50+ sensor. Dashboard Vue 3 menampilkan data suhu, kelembaban, dan konsumsi listrik via WebSocket.',
      stack: ['Vue 3', 'FastAPI', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      featured: true
    }
  ]

  const techBars = [
    { name: 'Vue.js',    percentage: 92, color: '#00e5ff' },
    { name: 'Python',    percentage: 88, color: '#10b981' },  
    { name: 'ESP32/IoT', percentage: 80, color: '#f97316' },
    { name: 'MQTT',      percentage: 82, color: '#f97316' },
    { name: 'PostgreSQL',percentage: 75, color: '#7c3aed' }, 
  ]

  const stats = [
    { value: '1',  label: 'Years Experience' },   
  ]

  // ── Getters ────────────────────────────────────────────
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') return projects
    return projects.filter((p) => p.type === activeFilter.value)
  })

  const featuredProjects = computed(() => projects.filter((p) => p.featured))

  // ── Actions ────────────────────────────────────────────
  function setFilter(filter) {
    activeFilter.value = filter
  }

  return {
    skills,
    projects,
    techBars,
    stats,
    activeFilter,
    isLoading,
    filteredProjects,
    featuredProjects,
    setFilter
  }
})
