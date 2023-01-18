<script setup lang="ts">
import type { User } from "@/lib/interfaces";
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
  <RouterLink :to="'/' + user.id">
    <Card>
      <img class="card__picture" :src="user.picture.large" alt="user.name" />
      <div class="card__body">
        <h2 class="card__name">{{ fullName }}</h2>
        <p class="card__bio">{{ user.bio }}</p>
      </div>
    </Card>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  &__picture {
    object-fit: cover;
    width: 100%;
    max-height: 300px;

    @media (min-width: 768px) {
      max-height: unset;
    }
  }

  &__body {
    padding: 1rem;
    color: #f5f5f5;
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
