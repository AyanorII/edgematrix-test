<script setup lang="ts">
import Label from "./Label.vue";
import FormControl from "./FormControl.vue";

type InputType = "text" | "email" | "password";

defineProps<{
  id: string;
  placeholder: string;
  label: string;
  type: InputType;
  modelValue: string;
}>();
</script>

<template>
  <FormControl>
    <Label :for="id">{{ label }}</Label>
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event?.target as HTMLInputElement)?.value)
      "
    />
  </FormControl>
</template>

<style scoped lang="scss">
input {
  // TODO: Refactor this to use same styles as Select.vue
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
}
</style>
