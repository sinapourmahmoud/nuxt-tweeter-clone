import { prisma } from ".";
const addRefreshToken = async (options) => {
  await prisma.refreshToken.create({
    data: { ...options },
  });
};
export default addRefreshToken;
