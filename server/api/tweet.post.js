import { uploadToCloudinary } from "../utils/uploadImage";
import createTweet from "../utils/createTweet";
import createFileMedia from "../utils/createFileMedia";
export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { image, text } = body;
  let { id } = event.context.auth.user;
  try {
    let data = await createTweet({
      text: text,
      authorId: id,
    });
    if (image) {
      let uploadedImage = await uploadToCloudinary(image);
      let fileMedia = await createFileMedia({
        tweetId: data.id,
        providerPublicId: uploadedImage.public_id,
        url: uploadedImage.secure_url,
        userId: id,
      });
    }
    return {
      message: "added",
    };
  } catch (err) {
    sendError(event, createError({ status: 500, statusMessage: err.message }));
  }
});
