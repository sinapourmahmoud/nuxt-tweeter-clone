import { prisma } from ".";
const addRefreshToken = async (data) => {
  let addRefreshToken = await prisma.refreshToken.create({
    data,
  });
};
export default addRefreshToken;
