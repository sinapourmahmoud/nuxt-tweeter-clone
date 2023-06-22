import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  runtimeConfig: {
    jwtAccessToken: process.env.SET_ACCESS_TOKEN_SECRET,
    jwtRefreshToken: process.env.SET_REFRESH_TOKEN_SECRET,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
