export default async (url, options = {}) => {
  let { useToken } = useAuth();
  let data = await $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${useToken().value}`,
    },
  });
  console.log(data);
  return data;
};
