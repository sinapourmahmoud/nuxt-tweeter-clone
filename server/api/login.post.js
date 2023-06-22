import { prisma } from "../db";
import bcrypt from "bcrypt";
export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { email, password, userName } = body;
  if (!password || !email) {
    sendError(
      event,
      createError({ status: 500, statusMessage: "invalid data" })
    );
  }
  try {
    let findUser = await prisma.user.findUnique({
      where: {
        userName,
      },
    });
    if (!findUser) {
      sendError(
        event,
        createError({
          status: 401,
          statusMessage: "User has not loged in  !!!",
        })
      );
    }
    let comparedPasswords = await bcrypt.compare(password, findUser.password);
    if (!comparedPasswords) {
      sendError(
        event,
        createError({
          status: 401,
          statusMessage: "User has not loged in  !!!",
        })
      );
    }
    return {
      ...findUser,
      password: "security",
    };
  } catch (err) {
    sendError(
      event,
      createError({
        status: 401,
        statusMessage: err.message,
      })
    );
  }
});
