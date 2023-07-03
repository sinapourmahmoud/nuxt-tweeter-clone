import { prisma } from ".";
export default async (token) => {
  return prisma.refreshToken.delete({
    where: {
      token,
    },
  });
};
