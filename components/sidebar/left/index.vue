<template>
  <div
    class="flex flex-col justify-between items-center pr-5 sm:sticky sm:top-0"
  >
    <div class="flex flex-col gap-5 items-center">
      <LogoAvatar
        class="w-10 rounded-full dark:hover:bg-blue-400 cursor-pointer p-2 hover:bg-blue-100"
        :class="defaultTransition"
      />
      <SidebarLeftOptions />
    </div>
  </div>
</template>

<script setup>
const { defaultTransition } = useTailwind();
</script>
