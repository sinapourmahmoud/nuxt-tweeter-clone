import getTweet from "../../db/getTweet";

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
      data: getFirstTweet,
    };
  } catch (err) {
    sendError(event, { statusCode: 500, statusMessage: err.message });
  }
});
