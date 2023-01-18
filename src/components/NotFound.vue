<script lang="ts" setup>
import PageHeading from "@/components/PageHeading.vue";
</script>

<template>
  <div class="not-found">
    <img src="/not-found.png" alt="" class="not-found__illustration" />
    <PageHeading> Page not found </PageHeading>
    <RouterLink to="/">Go back</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__illustration {
    width: 100%;
    max-width: 500px;
  }
}
</style>
