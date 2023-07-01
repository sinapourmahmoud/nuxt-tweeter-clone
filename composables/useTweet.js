export default () => {
  const getTweet = async (id) => {
    let data = await useFetchApi(`/api/tweet/${id}`, {
      method: "GET",
    });
    return data;
  };
  return {
    getTweet,
  };
};
