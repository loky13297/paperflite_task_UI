export const mockJson = [
  {
    name: "Meet New Paperflite",
    shared: 1,
    lastActive: 8,
    createdDate:"2023-02-15",
    timeSpent:5,
    img: "",
    boxDetails: [
      {
        text: "email open rate",
        value: "50%",
      },
      {
        text: "content click rate",
        value: "100%",
      },
      {
        text: "total time spent",
        value: "22:53",
      },
      {
        text: "deal value",
        value: "$ 367",
      },
    ],
    users: [
      {
        name: "James Clark",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Elizabeth Carol",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Michael",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Pamela Jack",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Pamela Jack",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
    ],
  },
  {
    name: "Collection “seeeek”",
    shared: 2,
    lastActive: 2,
    createdDate:"2024-01-12",
    img: "",
    timeSpent:10,
    boxDetails: [
      {
        text: "email open rate",
        value: "10%",
      },
      {
        text: "content click rate",
        value: "30%",
      },
      {
        text: "total time spent",
        value: "10:33",
      },
      {
        text: "deal value",
        value: "$ 12",
      },
    ],
    users: [
      {
        name: "Ishaan",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Glory",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Naseem",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Edison",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Raahul",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
    ],
  },
  {
    name: "Indira Gandhi International Airport",
    shared: 3,
    lastActive: 7,
    img: "",
    timeSpent:7,
    createdDate:"2023-06-12",
    boxDetails: [
      {
        text: "email open rate",
        value: "34%",
      },
      {
        text: "content click rate",
        value: "43%",
      },
      {
        text: "total time spent",
        value: "21:03",
      },
      {
        text: "deal value",
        value: "$ 67",
      },
    ],
    users: [
      {
        name: "Senthil",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Mugundhan",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Balaji",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Princy",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Priya",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
    ],
  },
  {
    name: "Paperflite Originals",
    shared: 4,
    lastActive: 1,
    img: "",
    timeSpent:2,
    createdDate:"2023-10-22",
    boxDetails: [
      {
        text: "email open rate",
        value: "25%",
      },
      {
        text: "content click rate",
        value: "54%",
      },
      {
        text: "total time spent",
        value: "16:53",
      },
      {
        text: "deal value",
        value: "$ 327",
      },
    ],
    users: [
      {
        name: "Richerd",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Vijay",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Vikram",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Lathika",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Pavithra",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
    ],
  },
  {
    name: "Meet New persons",
    shared: 5,
    lastActive: 10,
    timeSpent:4,
    createdDate:"2023-4-02",
    img: "",
    boxDetails: [
      {
        text: "email open rate",
        value: "67%",
      },
      {
        text: "content click rate",
        value: "23%",
      },
      {
        text: "total time spent",
        value: "12:53",
      },
      {
        text: "deal value",
        value: "$ 876",
      },
    ],
    users: [
      {
        name: "Kanan",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Dhruv",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Jai",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Amar",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
      {
        name: "Anjali",
        lastViewed: "02 Jan 2024",
        min: "~85m",
        img: "",
      },
    ],
  },
];

//date sort
export function sortByDate(array) {
  return array?.slice()?.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
}

//activeby sort
export function sortByActive(array) {
  return array?.slice()?.sort((a, b) => a.lastActive - b.lastActive);
}

//time spent sort
export function sortByTimeSpent(array) {
  return array?.slice()?.sort((a, b) => a.timeSpent - b.timeSpent);
}