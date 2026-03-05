import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCursorStore = defineStore('cursor', () => {
  const x = ref(0)
  const y = ref(0)
  const ringX = ref(0)
  const ringY = ref(0)
  const isClicking = ref(false)
  const isHovering = ref(false)

  function init() {
    document.addEventListener('mousemove', (e) => {
      x.value = e.clientX
      y.value = e.clientY
      setTimeout(() => {
        ringX.value = e.clientX
        ringY.value = e.clientY
      }, 60)
    })

    document.addEventListener('mousedown', () => (isClicking.value = true))
    document.addEventListener('mouseup', () => (isClicking.value = false))

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', () => (isHovering.value = true))
      el.addEventListener('mouseleave', () => (isHovering.value = false))
    })
  }

  return { x, y, ringX, ringY, isClicking, isHovering, init }
})
