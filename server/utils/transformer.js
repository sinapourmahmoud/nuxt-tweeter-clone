import human from "human-time";
export const userTransformer = (item) => {
  return {
    ...item,
    password: "security",
  };
};
export const allTweetsTransformer = (items) => {
  return [
    ...items.map((item) => ({
      ...item,
      replies: [
        ...item.replies.map((reply) => ({
          ...reply,
          author: userTransformer(reply.author),
        })),
      ],
      author: userTransformer(item.author),
      createdAt: human(item.createdAt),
      replyTo: !!item.replyTo
        ? {
            ...item.replyTo,
            author: userTransformer(item.replyTo.author),
          }
        : null,
    })),
  ];
};

export const tweetTransformer = (item) => {
  return {
    ...item,
    author: userTransformer(item.author),
    replies: [
      ...item.replies.map((reply) => ({
        ...reply,
        author: userTransformer(reply.author),
        createdAt: human(reply.createdAt),
      })),
    ],
    createdAt: human(item.createdAt),

    replyTo: !!item.replyTo
      ? {
          ...item.replyTo,
          author: userTransformer(item.replyTo.author),
        }
      : null,
  };
};
