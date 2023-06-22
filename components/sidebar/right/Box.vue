<template>
  <div
    class="flex flex-col dark:bg-dim-700 border border-gray-300 py-2 dark:border-dim-700 rounded-xl"
  >
    <div class="border-b dark:border-b-white pb-2 flex items-center">
      <h2 class="text-lg font-semibold dark:text-white px-2">
        {{ title }}
      </h2>
    </div>
    <div class="flex flex-col">
      <SidebarRightBoxItem
        v-for="item in items"
        :key="item"
        :title="item.title"
        :description="item.count"
        :fromFollow="fromFollow"
        :image="item?.image"
      />
    </div>
    <div
      class="flex items-center pt-2 px-2 cursor-pointer text-sky-500 text-xs"
    >
      Show more
    </div>
  </div>
</template>
<script setup>
const { title, items, fromFollow } = defineProps({
  title: {
    type: String,
    required: true,
  },
  fromFollow: { type: Boolean, default: false },
  items: {
    type: Array,
  },
});
</script>
