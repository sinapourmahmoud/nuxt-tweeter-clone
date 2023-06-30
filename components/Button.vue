<template>
  <button
    :type="type"
    :class="`${defaultTransition} ${sizehandler} ${customClass}`"
    :disabled="disabled"
    class="bg-blue-400 disabled:cursor-not-allowed disabled:opacity-80 hover:bg-blue-500 rounded-3xl py-2 text-base font-medium text-white dark:text-dim-300"
  >
    {{ text }}
  </button>
</template>
<script setup>
let { defaultTransition } = useTailwind();
let { type, text, size, customClass, disabled } = defineProps({
  type: {
    type: String,
    default: "button",
  },
  text: {
    type: String,
    default: "Tweet",
  },
  size: {
    type: String,
    default: "sm",
  },
  size: {
    type: String,
    default: false,
  },
  customClass: {
    type: String,
    required: false,
  },
  disabled: {
    type: String,
  },
});

let sizehandler = computed(() => {
  switch (size) {
    case "sm":
      return "px-5 py-1";
    case "lg":
      return "px-10 py-1 w-full";
  }
});
</script>
