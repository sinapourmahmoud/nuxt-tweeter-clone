export default () => {
  const getDatas = async (query) => {
    return await useFetchApi(
      `/api/getTweets${!!query ? `?search=${query}` : ""}`,
      {
        method: "GET",
      }
    );
  };
  return { getDatas };
};
