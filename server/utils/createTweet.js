import { prisma } from "../db";
export default async (value) => {
  return await prisma.tweet.create({
    data: {
      ...value,
    },
  });
};
