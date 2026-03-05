<script setup>
import { onMounted } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import CustomCursor from '@/components/ui/CustomCursor.vue'
import { useCursorStore } from '@/stores/cursor'

const cursor = useCursorStore()

onMounted(() => {
  cursor.init()
})
</script>

<template>  
 <CustomCursor />
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>
