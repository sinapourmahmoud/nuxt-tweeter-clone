<template>
  <div :class="{ dark: darkMode }">
    <div
      class="fixed top-4 left-2 w-6 h-6 bg-red-500"
      @click="darkMode = !darkMode"
    ></div>
    <div class="dark:bg-dim-400 bg-white">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup>
let darkMode = ref(false);
</script>
