import data from "../data.js";
import getRandomElement from "../components/randomElement.js";

const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += data[getRandomElement()];
  }
  return color;
};

export default getRandomColor;
