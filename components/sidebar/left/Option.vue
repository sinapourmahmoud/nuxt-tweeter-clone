<script setup>
const props = defineProps({
  active: {
    default: false,
    type: Boolean,
  },
});

const textFont = computed(() =>
  props.active ? "font-semibold" : "font-medium"
);
</script>
<template>
  <NuxtLink
    to="#"
    class="flex items-center md:gap-6 hover:bg-gray-200 dark:hover:bg-dim-200 p-3 md:py-2 rounded-full md:rounded-3xl"
  >
    <div>
      <slot name="icon"></slot>
    </div>
    <div class="hidden md:block text-lg" :class="textFont">
      <slot name="title"></slot>
    </div>
  </NuxtLink>
</template>
