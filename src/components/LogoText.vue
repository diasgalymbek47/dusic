<script setup>
  defineProps({
    color: {
      type: String,
      default: '#ffffff'
    }
  })
</script>

<template>
  <h1 :style="{color: color}" class="header-title">Dusic</h1>
</template>

<style scoped>
  h1 {
    font-weight: 600;
    font-size: 18px;
  }
</style>