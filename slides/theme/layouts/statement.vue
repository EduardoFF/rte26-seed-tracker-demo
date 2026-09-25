<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="slidev-layout statement relative h-full flex flex-col justify-center text-center">
    <div class="w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.statement :deep(h1) {
  text-align: center;
}
</style>
