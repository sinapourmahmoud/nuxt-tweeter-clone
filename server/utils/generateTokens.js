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

const generateTokens = async (user) => {
  let accessToken = await generateAccessToken(user);
  let refreshToken = await generateRefreshToken(user);
  console.log(generateAccessToken);
  return {
    accessToken,
    refreshToken,
  };
};
export default generateTokens;
