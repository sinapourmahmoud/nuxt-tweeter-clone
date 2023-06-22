<template>
  <div class="flex flex-col justify-between items-center h-full border-r pr-5">
    <div class="flex flex-col gap-5 items-center">
      <Logo
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
