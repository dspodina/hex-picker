import dom from "../dom.js";

const copyColorHandler = () => {
  let color = dom.header.innerText;
  const colorOnly = color.split(":")[1].trim();
  navigator.clipboard.writeText(colorOnly)
    .then(() => {
      dom.copiedText.innerHTML = "copied";
      setTimeout(function () {
        dom.copiedText.innerHTML = "";
      }, 500);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default copyColorHandler;
