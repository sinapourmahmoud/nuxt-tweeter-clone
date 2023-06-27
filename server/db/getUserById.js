import { prisma } from ".";
const getUserById = async (id) => {
  return await prisma.user.findFirst({
    where: {
      id,
    },
  });
};

export default getUserById;
