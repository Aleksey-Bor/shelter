import htmlToElement from "../../../utils/htmlToElement";
import LiHTML from "./index.html";


const Li =  (className) => {
  const liElement = htmlToElement(LiHTML);
  liElement.classList.add(className);
  return liElement;
}

export default Li;
 