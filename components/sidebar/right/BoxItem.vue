<template>
  <div
    :class="defaultTransition"
    class="p-3 border-b hover:bg-gray-200 dark:hover:bg-dim-200 dark:border-[rgba(255,255,255,0.5)]"
  >
    <div
      v-if="props.fromFollow"
      class="flex cursor-pointer items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <img
          :src="props.image"
          class="w-10 h-10 rounded-full"
          alt="user-profile"
        />
        <div class="flex flex-col gap-0.5">
          <p class="dark:text-white text-sm font-medium">{{ props.title }}</p>
          <small class="text-xs font-bold text-gray-500 dark:text-gray-300">{{
            props.description
          }}</small>
        </div>
      </div>
      <button
        class="bg-black text-white py-2 px-4 text-sm font-bold rounded-full dark:bg-white dark:text-black"
      >
        Follow
      </button>
    </div>
    <div v-else class="flex flex-col gap-1 cursor-pointer">
      <p class="dark:text-white text-sm font-medium">{{ props.title }}</p>
      <small class="text-xs font-light text-gray-500 dark:text-gray-300">{{
        props.description
      }}</small>
    </div>
  </div>
</template>
<script setup>
const { defaultTransition } = useTailwind();
const props = defineProps({
  fromFollow: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
