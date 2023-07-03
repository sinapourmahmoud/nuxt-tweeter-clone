import removeRefresh from "../db/removeRefresh";
import sendRefreshToken from "../utils/sendRefreshToken";
export default defineEventHandler(async (event) => {
  try {
    let refreshTokenCookie = getCookie(event, "refresh_token");
    let data = await removeRefresh(refreshTokenCookie);
  } catch (err) {}
  sendRefreshToken(event, null);
  return { message: "Done" };
});
