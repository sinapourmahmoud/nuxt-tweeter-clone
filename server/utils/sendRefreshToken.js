const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    sameSite: true,
    httpOnly: true,
  });
};
export default sendRefreshToken;
