<script setup lang="ts">
import UserProfileCard from "@/components/UserProfiles/UserProfileCard.vue";
import type { User } from "@/interfaces/user";

defineProps<{
  users: User[];
}>();
</script>

<template>
  <ul class="user-profiles">
    <li v-for="user in users" :key="user.id">
      <UserProfileCard :user="user" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.user-profiles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}
</style>
