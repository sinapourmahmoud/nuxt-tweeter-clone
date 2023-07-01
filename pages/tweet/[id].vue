<template>
  <div>
    <Header :title="`Tweet of ${data?.author?.name}`" />
    <FeedBodyItem
      :name="data?.author?.name"
      :userName="data?.author?.userName"
      :createdAt="data?.createdAt"
      :id="data?.id"
      :image="data?.mediaFiles[0]?.url"
      :text="data?.text"
      :profile="data?.author?.profileImage"
      :replyId="data?.replyTo?.id"
      :replyUserName="data?.replyTo?.author?.userName"
    />
    <FeedTweetForm :replyToId="data?.id" />
    <FeedBodyItem
      v-for="item in data?.replies"
      :key="item?.id"
      :name="item?.author?.name"
      :userName="item?.author?.userName"
      :createdAt="item?.createdAt"
      :id="data?.id"
      :image="item?.mediaFiles[0]?.url"
      :text="item?.text"
      :profile="item?.author?.profileImage"
      :replyId="data?.author?.id"
      :replyUserName="data?.author?.userName"
    />
  </div>
</template>

<script setup>
let router = useRoute();
let { getTweet } = useTweet();
let param = router.params.id;
let data = ref(null);
onMounted(async () => {
  let result = await getTweet(param);
  data.value = result.data;
  console.log(data.value);
});
</script>
