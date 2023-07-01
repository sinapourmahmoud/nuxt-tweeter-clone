<template>
  <FeedBodyItem
    v-for="(data, index) in items?.data"
    :id="data?.id"
    :key="data?.id"
    :name="data?.author?.name"
    :profile="data?.author?.profileImage"
    :userName="data?.author?.userName"
    :createdAt="data?.createdAt"
    :image="data?.mediaFiles[0]?.url"
    :text="data?.text"
    :replyId="data?.replyTo?.id"
    :replyUserName="data?.replyTo?.author?.userName"
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
