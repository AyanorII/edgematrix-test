<script setup lang="ts">
import type { User } from "@/interfaces/user";
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Card from "../UI/Card.vue";

const props = defineProps<{
  user: User;
}>();

const fullName = computed(
  () => `${props.user.name.first} ${props.user.name.last}`
);
</script>

<template>
  <Card>
    <RouterLink :to="'/' + user.id">
      <img class="card__picture" :src="user.picture.large" alt="user.name" />
      <div class="card__body">
        <h2 class="card__name">{{ fullName }}</h2>
        <p class="card__bio">{{ user.bio }}</p>
      </div>
    </RouterLink>
  </Card>
</template>

<style scoped lang="scss">
.card {
  &__picture {
    object-fit: cover;
    width: 100%;
  }

  &__body {
    padding: 1rem;
    color: #F5F5F5;
  }

  &__name {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &__bio {
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }
}
</style>
