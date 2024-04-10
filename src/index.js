import dom from "./dom.js"
import data from "./data.js"
import getRandomElement from "./components/randomElement.js"


// HANDLERS
const getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += data[getRandomElement()];
    }
    return color;
};

// LISTENERS
dom.btn.addEventListener("click", () => {
    const color = getRandomColor(); 
    document.body.style.backgroundColor = color;
    dom.header.innerText = `HEX color: ${color}`;
    dom.copyIcon.style.display = "block"
});
  
dom.copyIcon.addEventListener("click", () => {
  
});



