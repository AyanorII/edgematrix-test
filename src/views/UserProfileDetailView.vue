<script setup lang="ts">
import data from "@/assets/users.json";
import PageHeading from "@/components/PageHeading.vue";
import UserInfoList from "@/components/UserProfiles/UserInfoList.vue";
import type { User } from "@/interfaces/user";
import { getFullName } from "@/lib/helpers";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.path.split("/")[1];
const user = data.find((u) => u.id === id) as unknown as User;

const fullName = computed(() => getFullName(user));
</script>

<template>
  <div class="page">
    <RouterLink to="/">Go back</RouterLink>
    <div class="user">
      <img :src="user.picture.large" :alt="fullName" class="user__image" />
      <div class="right-side">
        <div class="user__name">
          <PageHeading>{{ fullName }}</PageHeading>
          <FontAwesomeIcon
            :icon="user.gender === 'male' ? 'mars' : 'venus'"
            size="2x"
            :style="{ color: user.gender === 'male' ? '#0096FF' : '#DA70D6' }"
          />
        </div>
        <p id="bio">{{ user.bio }}</p>
        <UserInfoList :user="user" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
}

.right-side {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content {
  display: grid;
  align-items: center;
}

.user {
  display: grid;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }

  &__image {
    height: 100%;
    object-fit: cover;
  }

  &__name {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

img {
  border-radius: 8px;
  width: 100%;
}

#bio {
  margin-block: 1rem;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
