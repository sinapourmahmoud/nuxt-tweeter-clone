import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@formkit/nuxt", "@nuxt/image-edge"],
  runtimeConfig: {
    jwtAccessToken: process.env.SET_ACCESS_TOKEN_SECRET,
    jwtRefreshToken: process.env.SET_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDNAME,
    cloudinaryAPIKey: process.env.API_KEY,
    cloudinaryAPISecret: process.env.API_SECRET,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dxlq8pwwl/image/upload/v1685716173",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
