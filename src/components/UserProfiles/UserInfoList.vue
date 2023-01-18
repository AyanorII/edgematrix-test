<script setup lang="ts">
import { getCountry } from "@/lib/helpers";
import type { RestCountriesApiResponse, User } from "@/lib/interfaces";
import { computed, onUpdated, ref } from "vue";
import UserInfoListItem from "./UserInfoListItem.vue";

const props = defineProps<{
  user: User;
}>();

const birthday = computed(() =>
  new Date(props.user.dob.date).toLocaleDateString("en-US")
);

const address = computed(() => {
  const { street, city, state, country, postcode } = props.user.location;

  return `${street.number} ${street.name}, ${city}, ${state}, ${country}, ${postcode}`;
});

const nationality = computed(() => {
  const gender = props.user.gender === "male" ? "m" : "f";
  return country.value?.demonyms.eng[gender] || "";
});

const country = ref<RestCountriesApiResponse | null>(null);
country.value = await getCountry(props.user.nat);

const flag = computed(() => country.value?.flag || "");

onUpdated(async () => {
  const previousUserCountry = country.value?.cca2;
  const currentUserCountry = props.user.nat;

  // If the user's country hasn't changed, prevent meaningless data fetching
  if (previousUserCountry === currentUserCountry) {
    return;
  } else {
    country.value = await getCountry(props.user.nat);
  }
});
</script>

<template>
  <ul class="user__info">
    <UserInfoListItem
      id="email"
      icon="envelope"
      label="Email: "
      :value="user.email"
    />
    <UserInfoListItem
      id="age"
      icon="cake-candles"
      label="Birthday: "
      :value="`${birthday} (${user.dob.age} y.o.)`"
    />
    <UserInfoListItem
      id="phone"
      icon="phone"
      label="Phone: "
      :value="user.phone"
    />
    <UserInfoListItem
      id="address"
      icon="location-dot"
      label="Address: "
      :value="address"
    />
    <UserInfoListItem
      id="nationality"
      icon="earth-americas"
      label="Nationality: "
      :value="`${nationality} ${flag}`"
    />
  </ul>
</template>

<style lang="scss" scoped>
.user__info {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}
</style>
