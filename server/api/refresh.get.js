import getRefreshToken from "../db/getRefreshToken";
import getUserById from "../db/getUserById";

export default defineEventHandler(async (event) => {
  let refreshTokenCookie = getCookie(event, "refresh_token");
  if (!refreshTokenCookie) {
    sendError(event, createError({ status: 500, message: "not have cookie" }));
  }

  let rToken = await getRefreshToken(refreshTokenCookie);
  if (!rToken) {
    sendError(event, createError({ status: 500, message: "cookie not found" }));
  }
  const token = await decodedToken(refreshTokenCookie);

  try {
    let user = await getUserById(token?.id);
    const { accessToken } = await generateTokens(user);
    return {
      token: accessToken,
    };
  } catch (err) {
    sendError(
      event,
      createError({ status: 500, message: "something went wrong" })
    );
  }
});
