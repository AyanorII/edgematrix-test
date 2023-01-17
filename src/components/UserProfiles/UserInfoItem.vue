<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  id: string;
  icon: string;
  label: string;
  value: string;
}>();
</script>

<template>
  <li :id="id" class="user__info-item">
    <FontAwesomeIcon :icon="icon" />
    <span>{{ label }}</span>
    <p>{{ value }}</p>
  </li>
</template>

<style lang="scss" scoped>
.user__info-item {
  display: grid;
  grid-template-columns: auto 0.2fr 1fr;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #f5f5f5;

  p {
    font-weight: 600;
  }

  span {
    color: #aeacac;
  }
}
</style>
