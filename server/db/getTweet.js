import { prisma } from ".";
export default async (id, options = {}) => {
  return await prisma.tweet.findUnique({
    where: {
      id,
    },
    ...options,
  });
};
