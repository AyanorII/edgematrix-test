<script setup lang="ts"></script>

<template>
  <div class="form-control">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.form-control {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
}
</style>
