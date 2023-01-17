<template>
  <h1 class="heading">
    <slot></slot>
  </h1>
</template>

<style scoped lang="scss">
.heading {
  font-size: 2rem;
  font-weight: 600;
  color: #f5f5f5;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
}
</style>
