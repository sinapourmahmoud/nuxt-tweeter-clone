const useAuth = () => {
  let useUser = () => useState("auth_user", () => null);
  let useToken = () => useState("auth_token", () => null);
  let isloading = () => useState("loading", () => true);
  const setUser = (val) => {
    const user = useUser();
    user.value = val;
  };
  const setToken = (val) => {
    const token = useToken();
    token.value = val;
  };
  const login = async (userName, password) => {
    try {
      let data = await $fetch("/api/login", {
        method: "POST",
        body: {
          userName,
          password,
        },
      });
      setUser(data?.userName);
      setToken(data?.accessToken);
    } catch (err) {
      console.log(err);
    }
  };
  const refreshToken = async () => {
    try {
      let data = await $fetch("/api/refresh");
      setToken(data?.token);
    } catch (err) {
      setToken(null);
    }
  };
  const refreshUser = async () => {
    try {
      let data = await useFetchApi("/api/user");
      setUser(data?.user?.userName);
    } catch (err) {
      setUser(null);
    }
  };
  const initAuth = async () => {
    isloading().value = true;
    try {
      await refreshToken();
      await refreshUser();
    } catch (err) {
    } finally {
      isloading().value = false;
    }
  };

  return {
    login,
    isloading,
    useUser,
    useToken,
    initAuth,
  };
};

export default useAuth;
