import jwt from "jsonwebtoken";
const generateAccessToken = async (user) => {
  let config = useRuntimeConfig();
  return jwt.sign({ userId: user?.id }, config?.jwtAccessToken, {
    expiresIn: "10m",
  });
};
const generateRefreshToken = async (user) => {
  let config = useRuntimeConfig();
  return jwt.sign({ userId: user?.id }, config?.jwtRefreshToken, {
    expiresIn: "4h",
  });
};

export const decodedToken = async (refreshToken) => {
  const config = useRuntimeConfig();

  try {
    return await jwt.verify(refreshToken, config.jwtRefreshToken);
  } catch (error) {
    console.error(error);
  }
};

export const decodedAccessToken = async (token) => {
  let config = useRuntimeConfig();

  try {
    return await jwt.verify(token, config?.jwtAccessToken);
  } catch (err) {
    return null;
  }
};
const generateTokens = async (user) => {
  let accessToken = await generateAccessToken(user);
  let refreshToken = await generateRefreshToken(user);
  return {
    accessToken,
    refreshToken,
  };
};
export default generateTokens;
