// DATA
const data = ["0", "1", "2", "3", "4", "5", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

// DOM
const dom = {
    header: document.getElementById("h2"),
    hexText: document.getElementById("hex"),
    btn: document.getElementById("btn")
};

// UTILS
const getRandomElement = () => {
    return Math.floor(Math.random() * data.length);
};

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
    dom.hexText.innerText = color;
    dom.hexText.style.display = "block";
    // dom.header.style.color = color;
});


// LOGS
console.log(getRandomElement()); 
console.log("Random color generated: ", getRandomColor()); 
