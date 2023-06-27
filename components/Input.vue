<template>
  <div class="flex flex-col gap-1 w-[80%]">
    <FormKit
      :type="type"
      :name="id"
      :id="id"
      :validation="validation"
      :label="label"
      :placeholder="placeholder"
      outer-class="mb-5"
      message=" text-red-500 mb-1 text-xs max-w-xs"
      label-class="block mb-1 font-bold text-sm formkit-invalid:text-red-500"
      input-class="min-w-[100%] h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-3xl border border-gray-400 focus-within:border-blue-500"
    />
  </div>
</template>

<script setup>
let { label, id, placeholder, type, modelValue } = defineProps({
  label: {
    type: String,
  },
  validation: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>
