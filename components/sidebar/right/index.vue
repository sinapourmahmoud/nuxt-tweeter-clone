<template>
  <div class="flex flex-col gap-4 h-full">
    <form>
      <div
        class="w-full bg-gray-200 dark:bg-white dark:bg-opacity-50 rounded-3xl h-10 flex items-center pl-2"
      >
        <MagnifyingGlassIcon class="w-5 dark:text-white text-black" />
        <input
          type="text"
          class="w-full border-transparent outline-none h-full rounded-3xl bg-transparent text-black dark:text-white dark:placeholder:text-white placeholder:text-black"
          placeholder="Search tweeter"
        />
      </div>
    </form>
    <SidebarRightBox
      title="Whats happening?"
      :fromFollow="false"
      :items="hashtags"
    />
    <SidebarRightBox title="Who to follow" :fromFollow="true" :items="people" />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

let hashtags = ref([
  {
    title: "#Bill gates",
    count: "56K Tweets",
  },
  {
    title: "#Sina",
    count: "65 Tweets",
  },
  {
    title: "#tractor",
    count: "2K Tweets",
  },
]);
let people = ref([
  {
    title: "Sina",
    count: "@sina_p84",
    image: "https://picsum.photos/200/200",
  },
  {
    title: "Bill gates",
    count: "@Billgates",
    image: "https://picsum.photos/200/200",
  },
  {
    title: "ali ",
    count: "@ali_production",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
