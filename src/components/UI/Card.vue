<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: rgb(68, 67, 67);
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
}
</style>
