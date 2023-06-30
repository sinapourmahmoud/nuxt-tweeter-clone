import { prisma } from "../db";
import bcrypt from "bcrypt";
import addRefreshToken from "../db/addRefreshToken";
import sendRefreshToken from "../utils/sendRefreshToken";
import { userTransformer } from "../utils/transformer";
export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { password, userName } = body;
  if (!password || !userName) {
    sendError(
      event,
      createError({ status: 500, statusMessage: "invalid data:)" })
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
    let { accessToken, refreshToken } = await generateTokens(findUser);
    let addingRefresh = await addRefreshToken({
      userId: findUser.id,
      token: refreshToken,
    });
    sendRefreshToken(event, refreshToken);
    return {
      ...userTransformer(findUser),
      accessToken,
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
