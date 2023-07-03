<template>
  <div>
    <div class="w-full flex items-center justify-center" v-show="loading">
      <Spinner />
    </div>
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
      :replyId="data?.replyToId"
      :replyUserName="data?.replyTo?.author?.userName"
    />
  </div>
</template>
<script setup>
let { getDatas } = useGetTweets();
let id = useRoute().params.id;
let loading = ref(false);
let items = ref([]);
onMounted(async () => {
  loading.value = true;
  items.value = await getDatas(id);
  loading.value = false;
});
</script>
