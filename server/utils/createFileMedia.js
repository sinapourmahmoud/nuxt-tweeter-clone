import { prisma } from "../db";
export default async (item) => {
  return await prisma.mediaFile.create({
    data: {
      ...item,
    },
  });
};
