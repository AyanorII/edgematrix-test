<script setup lang="ts">
import data from "@/assets/users.json";
import PageHeading from "@/components/PageHeading.vue";
import Input from "@/components/UI/Input.vue";
import Select from "@/components/UI/Select.vue";
import UserProfilesList from "@/components/UserProfiles/UserProfilesList.vue";
import type { SortByOption, SortOrder, User } from "@/interfaces";
import { getFullName, sort } from "@/lib/helpers";
import { computed, ref } from "vue";

const users: User[] = data as unknown as User[];

const filterName = ref("");

const filteredUsers = computed(() =>
  users.filter((user) => {
    const fullName = getFullName(user).toLowerCase();
    return fullName.includes(filterName.value.toLowerCase());
  })
);

const sortByOptions: SortByOption[] = [
  { value: "name cres", label: "Name cres" },
  { value: "name desc", label: "Name desc" },
  { value: "bio cres", label: "Bio cres" },
  { value: "bio desc", label: "Bio desc" },
];

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
      All Users ({{ sortedUsers.length }})
    </PageHeading>
    <PageHeading v-else-if="sortedUsers.length === 0 && users.length !== 0">
      No users found with name: "{{ filterName }}"
    </PageHeading>
    <PageHeading v-else>
      Users with name: "{{ filterName }}" ({{ sortedUsers.length }})
    </PageHeading>

    <form id="filter-sort-options">
      <Input
        id="filter-name"
        placeholder="e.g. John Doe"
        label="Search by name"
        type="text"
        v-model="filterName"
      />
      <Select
        id="sort-by"
        label="Sort by"
        :options="sortByOptions"
        v-model="sortBy"
      />
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
  margin-block: 2rem;

  h1 {
    flex-grow: 1;
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    flex-direction: row;
    align-items: center;
  }
}

#filter-sort-options {
  display: flex;
  gap: 1rem;
  width: 100%;
}
</style>
