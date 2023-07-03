import { prisma } from ".";
const getRefreshToken = async (token) => {
  let data = await prisma.refreshToken.findFirst({
    where: {
      token,
    },
  });
  return data;
};

export default getRefreshToken;
