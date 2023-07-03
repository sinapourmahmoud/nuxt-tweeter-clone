<template>
  <Head>
    <Title>Tweet/{{ data?.author?.name || "" }}</Title>
    <Meta name="description" content="Sina s Tweeter clone" />
  </Head>
  <div>
    <Header :title="`Tweet of ${data?.author?.name}`" />
    <FeedBodyItem
      v-if="!loading"
      :name="data?.author?.name"
      :userName="data?.author?.userName"
      :createdAt="data?.createdAt"
      :id="data?.id"
      :image="data?.mediaFiles[0]?.url"
      :text="data?.text"
      :profile="data?.author?.profileImage"
      :replyId="data?.replyToId"
      :replyUserName="data?.replyTo?.author?.userName"
    />
    <FeedTweetForm :replyToId="data?.id" />
    <div class="w-full flex items-center justify-center" v-show="loading">
      <Spinner />
    </div>
    <FeedBodyItem
      v-for="item in data?.replies"
      :key="item?.id"
      :name="item?.author?.name"
      :userName="item?.author?.userName"
      :createdAt="item?.createdAt"
      :id="item?.id"
      :image="item?.mediaFiles[0]?.url"
      :text="item?.text"
      :profile="item?.author?.profileImage"
      :replyId="item?.replyToId"
      :replyUserName="item?.author?.userName"
    />
  </div>
</template>

<script setup>
let router = useRoute();
let { getTweet } = useTweet();
let param = router.params.id;
let data = ref(null);
let loading = ref(false);
onMounted(async () => {
  await fetchTweet();
});
watch(router.fullPath, async () => {
  await fetchTweet();
});
const fetchTweet = async () => {
  loading.value = true;
  let result = await getTweet(param);
  loading.value = false;
  data.value = result.data;
};
</script>
