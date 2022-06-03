import routingMethod from "../../../../routingMethod";
import htmlToElement from "../../../utils/htmlToElement";
import Li from "../../helpers/LiMaker/index";
import link from "../../helpers/RoutingLinkMaker/index";
import Header from "./index.html";
import "./index.scss";

const header = htmlToElement(Header);
const ulElem = header.getElementsByClassName("header__list")[0];

const customLi1 = Li("header__item");
const customLink1 = link({
  onClick: () => routingMethod.setPage(""),
  title: "About the shelter",
  className: "header__link",
  id: 1,
});
customLi1.appendChild(customLink1);
ulElem.appendChild(customLi1);

const customLi2 = Li("header__item");
const customLink2 = link({
  onClick: () => routingMethod.setPage("ourpets"),
  title: "Our pets",
  className: "header__link",
  id: 2,
});
customLi2.appendChild(customLink2);
ulElem.appendChild(customLi2);

const customLi3 = Li("header__item");
const customLink3 = link({
  onClick: () => routingMethod.setPage("help"),
  title: "Help the shelter",
  className: "header__link",
  id: 3,
});
customLi3.appendChild(customLink3);
ulElem.appendChild(customLi3);

const customLi4 = Li("header__item");
const customLink4 = link({
  onClick: () => routingMethod.setPage("contacts"),
  title: "Contacts",
  className: "header__link",
  id: 4,
});
customLi4.appendChild(customLink4);
ulElem.appendChild(customLi4);

export default header;
