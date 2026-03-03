<script setup>
defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="section-header">
    <p class="section-label">{{ label }}</p>
    <h2 class="section-title"><slot>{{ title }}</slot></h2>
  </div>
</template>
