import { uploadToCloudinary } from "../utils/uploadImage";
import createTweet from "../utils/createTweet";
import createFileMedia from "../utils/createFileMedia";
import { userTransformer } from "../utils/transformer";
export default defineEventHandler(async (event) => {
  let body = await readBody(event);
  let { image, text, replyToId } = body;
  let { id } = event.context.auth.user;
  try {
    let data = await createTweet({
      text: text,
      authorId: id,
      replyToId: replyToId ? replyToId : null,
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
      data: userTransformer(data),
    };
  } catch (err) {
    sendError(event, createError({ status: 500, statusMessage: err.message }));
  }
});
