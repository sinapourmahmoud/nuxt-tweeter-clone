import getTweets from "../db/getTweets";
import { allTweetsTransformer } from "../utils/transformer";

export default defineEventHandler(async (event) => {
  let { id, userName } = event.context.auth;
  let allTweets = await getTweets({
    where: {
      authorId: id,
    },
    include: {
      mediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
        },
      },
    },
  });
  let transformedData = allTweetsTransformer(allTweets);
  return {
    data: transformedData,
  };
});
