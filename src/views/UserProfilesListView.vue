<script setup lang="ts">
import data from "@/assets/users.json";
import PageHeading from "@/components/PageHeading.vue";
import UserProfilesList from "@/components/UserProfiles/UserProfilesList.vue";
import type { User } from "@/interfaces/user";
import { computed, ref } from "vue";
import { getFullName } from "../lib/helpers/getFullName";
import type { SortOrder } from "../lib/helpers/sort";
import { sort } from "../lib/helpers/sort";

const users: User[] = data as unknown as User[];

const filterName = ref("");

const filteredUsers = computed(() =>
  users.filter((user) => {
    const fullName = getFullName(user).toLowerCase();
    return fullName.includes(filterName.value.toLowerCase());
  })
);

const sortBy = ref("name cres");

const sortedUsers = computed(() =>
  filteredUsers.value.slice().sort((a, b) => {
    const [sortByTerm, order] = sortBy.value.split(" ");

    if (sortByTerm === "name") {
      const aFullName = getFullName(a);
      const bFullName = getFullName(b);

      return sort(aFullName.length, bFullName.length, order as SortOrder);
    } else {
      const term = sortByTerm as keyof User;
      return sort(
        (a[term] as string).length,
        (b[term] as string).length,
        order as SortOrder
      );
    }
  })
);
</script>

<template>
  <div class="header">
    <PageHeading v-if="sortedUsers.length === users.length">
      All Users({{ sortedUsers.length }})
    </PageHeading>
    <PageHeading v-else-if="sortedUsers.length === 0 && users.length !== 0">
      No users found with name: "{{ filterName }}"
    </PageHeading>
    <PageHeading v-else>
      Users with name: "{{ filterName }}" ({{ sortedUsers.length }})
    </PageHeading>

    <form id="filter-sort-options">
      <div class="form-control">
        <label for="filter-name">Search by name</label>
        <input
          v-model="filterName"
          id="filter-name"
          placeholder="e.g. John Doe"
        />
      </div>
      <div class="form-control">
        <label for="sort-by">Sort by</label>
        <select name="" id="sort-by" v-model="sortBy" class="select">
          <option value="name cres">Name cres</option>
          <option value="name desc">Name desc</option>
          <option value="bio cres">Bio cres</option>
          <option value="bio desc">Bio desc</option>
        </select>
      </div>
    </form>
  </div>
  <UserProfilesList :users="sortedUsers" />
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}

#filter-sort-options {
  display: flex;
  gap: 1rem;
  width: 100%;

  label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  input,
  select {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }
}
.form-control {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
}
</style>
