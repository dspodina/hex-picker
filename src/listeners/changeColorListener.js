import changeColorHandler from "../handlers/changeColorHandler.js";
import dom from "../dom.js";

const changeColorListener = () => {
  dom.btn.addEventListener("click", changeColorHandler);
};

export default changeColorListener;
