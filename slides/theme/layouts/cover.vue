<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="slidev-layout cover relative h-full flex flex-col justify-center">
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.cover :deep(h1) {
  font-size: 2.8rem;
  line-height: 1.2;
}
</style>
