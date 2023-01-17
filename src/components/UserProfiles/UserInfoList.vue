<script setup lang="ts">
import type { User } from "@/interfaces/user";
import { getCountry } from "@/lib/helpers";
import { computed } from "vue";
import UserInfoItem from "./UserInfoItem.vue";

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

const country = await getCountry(props.user.nat);
const nationality = computed(
  () => country.demonyms.eng[props.user.gender === "male" ? "m" : "f"]
);
const flag = computed(() => country.flag);
</script>

<template>
  <ul class="user__info">
    <UserInfoItem
      id="email"
      icon="envelope"
      label="Email: "
      :value="user.email"
    />
    <UserInfoItem
      id="age"
      icon="cake-candles"
      label="Birthday: "
      :value="`${birthday} (${user.dob.age} y.o.)`"
    />
    <UserInfoItem id="phone" icon="phone" label="Phone: " :value="user.phone" />
    <UserInfoItem
      id="address"
      icon="location-dot"
      label="Address: "
      :value="address"
    />
    <UserInfoItem
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