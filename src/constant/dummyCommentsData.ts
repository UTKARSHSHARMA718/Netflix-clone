export const DUMMY_COMMENTS_DATA = [
  {
    listingId: "6608643b8de45433a6eae804",
    comments: [
      {
        id: 1,
        text: "Nice movie",
        isLiked: true,
        comments: [
          {
            id: 2,
            isLiked: false,
            text: "yeah, I liked it too",
            comments: [
              {
                id: 3,
                isLiked: false,
                text: "but I watched it first",
                comments: [],
              },
            ],
          },
          {
            id: 12,
            isLiked: true,
            text: "Superb movie",
            comments: [
              {
                id: 13,
                isLiked: false,
                text: "Will definitrly watch it 2 more times",
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        isLiked: false,
        text: "When is was released, ohh sorry!",
        comments: [
          {
            id: 5,
            isLiked: true,
            text: "It's already given in the description above",
            replies: [
              {
                id: 6,
                isLiked: false,
                text: "Anyone has similar type of movie recommendation, I free for sat and sun so though I will might wanted to watch some similar movies ",
                comments: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    listingId: 2,
    comments: [
      {
        id: 7,
        isLiked: true,
        text: "Hello how are you?",
        comments: [
          {
            id: 8,
            isLiked: false,
            text: "I'm fine",
            comments: [
              {
                id: 9,
                isLiked: true,
                text: "I'm also fine",
                comments: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
