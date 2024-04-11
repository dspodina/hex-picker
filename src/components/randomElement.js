import data from "../data.js";

const getRandomElement = () => {
  return Math.floor(Math.random() * data.length);
};

export default getRandomElement;
