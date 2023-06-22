import { prisma } from "../db";
import createUser from "../db/createUser";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { username, name, password, email } = body;
  let findUser = await prisma.user.findFirst({
    where: {
      AND: [{ username }, { email }],
    },
  });
  if (findUser) {
    sendError(
      event,
      createError({ status: 500, statusMessage: "user has already exist" })
    );
  }
  let createUser = await prisma.user.create({
    data: {
      username,
      name,
      password,
      email,
      profileImage: "https://picsum.photos/200/200",
    },
  });
  return {
    createUser,
  };
});
