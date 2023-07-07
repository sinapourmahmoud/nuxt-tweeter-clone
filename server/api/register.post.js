import { prisma } from "../db";
import createUser from "../utils/createUser";
import { userTransformer } from "../utils/transformer";

export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { name, password, email, userName } = body;
  console.log(name, password, email, userName);
  if (!name || !password || !email || !userName) {
    sendError(
      event,
      createError({ status: 500, statusMessage: "invalid data" })
    );
  }
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
      ...userTransformer(createdUser),
    };
  } catch (err) {
    sendError(event, createError({ status: 500, statusMessage: err.message }));
  }
});
