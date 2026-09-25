<script setup lang="ts">
const show = import.meta.env.VITE_SHOW_NOTES === 'true'
if (show && typeof document !== 'undefined') {
  document.documentElement.classList.add('extended-notes-mode')
}
</script>

<template>
  <div v-if="show" class="extended-notes"><slot /></div>
</template>
