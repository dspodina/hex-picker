import getRandomColor from "../utils/getRandomColor.js";
import dom from "../dom.js";

const changeColorHandler = () => {
  const backgroundColor = getRandomColor();
  document.body.style.backgroundColor = backgroundColor;
  dom.header.innerText = `HEX Color: ${backgroundColor}`;
  dom.copyIcon.style.display = "block";
};

export default changeColorHandler;
