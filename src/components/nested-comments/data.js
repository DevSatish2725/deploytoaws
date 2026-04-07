export const data = [
  {
    id: 1,
    username: "Mukesh",
    comment: "This is a comment",
    replies: [
      {
        id: 11,
        username: "Sukesh",
        comment: "This is a reply to Mukesh's comment",
        replies: [
          {
            id: 111,
            username: "Rukesh",
            comment: "This is a reply to Sukesh's comment",
          },
        ],
      },
      {
        id: 12,
        username: "Nukesh",
        comment: "This is a reply to Mukesh's comment",
      },
    ],
  },
  {
    id: 2,
    username: "Bukesh",
    comment: "This is a comment",
    replies: [
      {
        id: 21,
        username: "Sukesh",
        comment: "This is a reply to Bukesh's comment",
        replies: [
          {
            id: 211,
            username: "Kukesh",
            comment: "This is a reply to Sukesh's comment",
          },
        ],
      },
      {
        id: 22,
        username: "Nukesh",
        comment: "This is a reply to Bukesh's comment",
        replies: [
          {
            id: 221,
            username: "Dukesh",
            comment: "This is a reply to Nukesh's comment",
            replies: [
              {
                id: 2211,
                username: "Oukesh",
                comment: "This is a reply to Dukesh's comment",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    username: "Pukesh",
    comment: "This is a comment",
  },
];
