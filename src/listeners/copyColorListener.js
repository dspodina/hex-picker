import copyColorHandler from "../handlers/copyColorHandler.js";
import dom from "../dom.js";

const copyColorListener = () => {
  dom.copyIcon.addEventListener("click", copyColorHandler);
};

export default copyColorListener;
