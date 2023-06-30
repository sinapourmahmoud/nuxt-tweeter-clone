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
      author: true,
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
    orderBy: {
      createdAt: "desc",
    },
  });
  let transformedData = allTweetsTransformer(allTweets);
  return {
    data: transformedData,
  };
});
