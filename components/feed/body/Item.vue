<template>
  <div class="flex flex-col border-b my-5 gap-5 dark:border-dim-200 py-2 px-4">
    <div class="flex gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <p class="text-md font-semibold">{{ name }}</p>
        </div>
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup>
let { name, userName, createdAt, image, text } = defineProps({
  name: {
    type: String,
  },
  userName: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>
