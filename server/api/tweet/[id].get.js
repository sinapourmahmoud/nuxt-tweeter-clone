import getTweet from "../../db/getTweet";
import { tweetTransformer } from "../../utils/transformer";

export default defineEventHandler(async (event) => {
  let id = event.context.params.id;
  try {
    let getFirstTweet = await getTweet(id, {
      include: {
        author: true,
        mediaFiles: true,
        replies: {
          include: {
            author: true,
            mediaFiles: true,
          },
        },
        replyTo: {
          include: {
            author: true,
            mediaFiles: true,
          },
        },
      },
    });
    return {
      data: tweetTransformer(getFirstTweet),
    };
  } catch (err) {
    sendError(event, { statusCode: 500, statusMessage: err.message });
  }
});
