export default () => {
  const getDatas = async () => {
    return await useFetchApi("/api/getTweets", {
      method: "GET",
    });
  };
  return { getDatas };
};
