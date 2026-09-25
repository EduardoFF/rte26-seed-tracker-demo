<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="slidev-layout section relative h-full flex flex-col justify-center">
    <div class="w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.section :deep(h1) {
  font-size: 2.6rem;
}
</style>
