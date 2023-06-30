import { prisma } from ".";
export default async (item) => {
  return await prisma.tweet.findMany({
    ...item,
  });
};
