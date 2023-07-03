import getTweets from "../db/getTweets";
import { allTweetsTransformer } from "../utils/transformer";

export default defineEventHandler(async (event) => {
  let { id, userName } = event.context.auth;
  let { search } = getQuery(event);
  let provider = {
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
  };
  if (search) {
    provider = {
      ...provider,
      where: {
        ...provider.where,
        text: {
          contains: search,
        },
      },
    };
  }
  let allTweets = await getTweets({ ...provider });
  let transformedData = allTweetsTransformer(allTweets);
  return {
    data: transformedData,
  };
});
