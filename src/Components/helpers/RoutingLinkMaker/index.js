import htmlToElement from "../../../utils/htmlToElement";
import LinkHTML from "./index.html";
import "./index.scss";

const RoutingLink = ({ onClick, title, className, id }) => {
  const linkElement = htmlToElement(LinkHTML);
  linkElement.innerHTML = title;
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.get("page") === id
    ? linkElement.classList.add(className + "_active")
    : linkElement.classList.add(className);
  linkElement.id = id;
  linkElement.addEventListener("click", onClick);
  return linkElement;
};

export default RoutingLink;
