import { prisma } from "../db";
import createUser from "../db/createUser";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { name, password, email, userName } = body;
  let findUser = await prisma.user.findFirst({
    where: {
      AND: [{ email }],
    },
  });
  if (findUser) {
    sendError(
      event,
      createError({ status: 500, statusMessage: "user has already exist" })
    );
  }
  try {
    let createdUser = await createUser({
      name,
      userName,
      password,
      email,
      profileImage: "https://picsum.photos/200/200",
    });
    return {
      ...createdUser,
      password: "security ",
    };
  } catch (err) {
    sendError(event, createError({ status: 500, statusMessage: err.message }));
  }
});
