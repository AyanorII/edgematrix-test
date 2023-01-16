<script setup lang="ts">
const props = defineProps<{
  for: string;
}>();
</script>

<template>
  <label :for="props.for">
    <slot></slot>
  </label>
</template>

<style scoped lang="scss">
label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
</style>
