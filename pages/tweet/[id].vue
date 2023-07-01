<template>
  <h5></h5>
</template>

<script setup>
let router = useRoute();
let { getTweet } = useTweet();
let param = router.params.id;

onMounted(async () => {
  let result = await getTweet("sasa");
  console.log(result);
});
</script>
