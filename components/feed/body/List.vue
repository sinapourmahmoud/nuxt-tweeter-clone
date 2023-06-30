<template>
  <FeedBodyItem
    v-for="(data, index) in items.data"
    :key="data.id"
    :name="data?.author?.name"
    :userName="data?.author?.userName"
    :createdAt="data?.createdAt"
    :image="data?.mediaFiles[0]?.url"
    :text="data.text"
  />
</template>
<script setup>
let { getDatas } = useGetTweets();
let items = ref([]);
onMounted(async () => {
  items.value = await getDatas();
  console.log(items.value);
});
</script>
