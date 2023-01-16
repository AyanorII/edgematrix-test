<script setup lang="ts">
import FormControl from "./FormControl.vue";
import Label from "./Label.vue";

defineProps<{
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  modelValue: string;
}>();
</script>

<template>
  <FormControl>
    <Label :for="id">{{ label }}</Label>
    <select
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)
      "
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </FormControl>
</template>

<style scoped lang="scss">
select {
  // TODO: Refactor this to use same styles as Input.vue
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
}
</style>
