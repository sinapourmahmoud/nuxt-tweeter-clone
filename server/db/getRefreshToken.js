import { prisma } from ".";
const getRefreshToken = async (token) => {
  let data = await prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
  return data;
};

export default getRefreshToken;
