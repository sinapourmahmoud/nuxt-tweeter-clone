<template>
  <div
    class="sticky top-0 bg-white/80 px-4 py-3 backdrop-blur-md rounded-md dark:bg-dim-900/80"
  >
    <h2 class="text-lg font-semibold dark:text-white">{{ title }}</h2>
  </div>
</template>
<script setup>
let { title } = defineProps({
  title: {
    type: String,
    default: "Home",
  },
});
</script>
