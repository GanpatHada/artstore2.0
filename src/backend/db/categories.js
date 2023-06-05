import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image:'https://t3.ftcdn.net/jpg/05/59/08/20/240_F_559082077_Io1XjMg1q8WHXVTc3HuaxzJQB0H9LGbW.jpg',
    categoryName: "Madhubani",
    description:
      "designs make perfectly distinctive geometrical patterns, scenes from mythology, and symbolic images",
  },
  {
    _id: uuid(),
    image:'https://t3.ftcdn.net/jpg/05/20/37/32/240_F_520373217_NLi01BVtO4wJUQSSWxDbvkeB2jrvp8vT.jpg',
    categoryName: "Warli",
    description:
      "Warli paintings also showcase day-to-day life scenarios of the local people of that particular community just like dancing, farming, hunting, praying, etc",
  },
  {
    _id: uuid(),
    image:'https://t4.ftcdn.net/jpg/05/60/63/27/240_F_560632701_SEqKsOFx1nGIDcDwZvD2eSFnwfI6uoI3.jpg',
    categoryName: "Miniature",
    description:
      "These paintings are created using all-natural mineral colours, precious stones, conch shells, gold, and silver",
  },
  {
    _id: uuid(),
    image:'https://t4.ftcdn.net/jpg/04/38/48/23/240_F_438482364_XOsRPL8U14UgCOzYI8i7ZvruDo1iOMpl.jpg',
    categoryName: "Phad",
    description:
      "Phad Painting marvellously portrays multiple stories in a single composition and beautifully maintains the aesthetics of artistic expression",
  },
 
];
