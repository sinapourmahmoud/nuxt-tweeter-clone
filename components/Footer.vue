<template>
  <footer>
    <div class="flex items-center flex-wrap gap-5">
      <span
        class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        @click.prevent="darkToggle = !darkToggle"
        >Dark mode</span
      >
      <span class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >@sina_p84</span
      >
      <span class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >Frontend</span
      >
      <span class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >Developer</span
      >
      <span class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >Vuejs</span
      >
      <span class="text-sm text-gray-600 dark:text-gray-300 cursor-pointer"
        >Nuxtjs</span
      >
    </div>
  </footer>
</template>
<script setup>
let { darkToggle } = useTailwind();
</script>
