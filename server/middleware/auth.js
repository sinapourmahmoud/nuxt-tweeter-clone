import UrlPattern from "url-pattern";
import { decodedAccessToken } from "../utils/generateTokens";
import getUserById from "../db/getUserById";
export default defineEventHandler(async (event) => {
  const query = getRequestURL(event).pathname;
  const endpoints = ["/api/user", "/api/tweet"];
  const isHandeled = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    return pattern.match(query);
  });
  if (!isHandeled) return;
  let token = event.req.headers["authorization"]?.split(" ")[1];
  const decodedToken = await decodedAccessToken(token);
  if (!decodedToken) {
    sendError(event, {
      statusCode: 401,
      statusMessage: "not loggin",
    });
  }
  try {
    let user = await getUserById(decodedToken?.userId);
    event.context.auth = { user };
  } catch (err) {
    sendError(event, {
      statusCode: 500,
      statusMessage: "something went wrong",
    });
  }
});
