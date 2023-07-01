export default () => {
  const getTweet = async (id) => {
    let data = await $fetch(`/api/tweet/${id}`);
    return data;
  };
  return {
    getTweet,
  };
};
