<script setup lang="ts">
import data from "@/assets/users.json";
import NotFound from "@/components/NotFound.vue";
import PageHeading from "@/components/PageHeading.vue";
import UserInfoList from "@/components/UserProfiles/UserInfoList.vue";
import UserProfilesList from "@/components/UserProfiles/UserProfilesList.vue";
import {
  getFullName,
  getUserById,
  getUserIdFromUrl,
  shuffle,
} from "@/lib/helpers";
import type { User } from "@/lib/interfaces";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(getUserIdFromUrl(route));
const user = ref<User | null>(getUserById(id.value));

watch(route, (newRoute) => {
  id.value = getUserIdFromUrl(newRoute);
  user.value = getUserById(id.value);
});

const otherUsers = computed(() => {
  const users = data.filter((u) => u.id !== id.value) as User[];
  return shuffle(users).slice(0, 4);
});

const fullName = computed(() => (user.value ? getFullName(user.value) : ""));
</script>

<template>
  <div v-if="user" class="page">
    <RouterLink to="/" class="go-back-button">
      <FontAwesomeIcon icon="chevron-left" />
      Go back
    </RouterLink>
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
    <div class="users-list">
      <h2>Other users</h2>
      <UserProfilesList :users="otherUsers" />
    </div>
  </div>
  <NotFound v-else />
</template>

<style scoped lang="scss">
.page {
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
}

.go-back-button {
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 0;
    transition: all 0.15s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: #42b983;
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

.users-list {
  margin-top: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
}
</style>
