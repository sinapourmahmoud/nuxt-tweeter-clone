import { prisma } from "../db";
import bcrypt from "bcrypt";
const createUser = async (data) => {
  let addUser = await prisma.user.create({
    data: {
      ...data,
      password: bcrypt.hashSync(data.password, 10),
    },
  });
  return addUser;
};

export default createUser;
