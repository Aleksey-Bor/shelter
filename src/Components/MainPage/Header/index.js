import routingMethod from "../../../../routingMethod";
import htmlToElement from "../../../utils/htmlToElement";
import Li from "../../helpers/LiMaker/index";
import RoutingLink from "../../helpers/RoutingLinkMaker/index";
import BurgerButton from "./BurgerButton";
import Header from "./index.html";
import MobileMenu from "./MobileMenu/index";
import "./index.scss";

const header = htmlToElement(Header);
const ulElem = header.getElementsByClassName("header__list")[0];
const nav = header.getElementsByTagName("nav")[0];
let searchParams = new URLSearchParams(window.location.search);

const customLi1 = Li("header__item");
const customLink1 = RoutingLink({
  onClick: () => routingMethod.setPage(""),
  title: "About the shelter",
  className: "header__link",
  id: "",
});
if (searchParams.get("page") === null) {
  customLink1.className = customLink1.className + "_active";
}
customLi1.appendChild(customLink1);
ulElem.appendChild(customLi1);

const customLi2 = Li("header__item");
const customLink2 = RoutingLink({
  onClick: () => routingMethod.setPage("ourpets"),
  title: "Our pets",
  className: "header__link",
  id: "ourpets",
});
customLi2.appendChild(customLink2);
ulElem.appendChild(customLi2);

const customLi3 = Li("header__item");
const customLink3 = RoutingLink({
  onClick: () => routingMethod.setPage("help"),
  title: "Help the shelter",
  className: "header__link",
  id: "help",
});
customLi3.appendChild(customLink3);
ulElem.appendChild(customLi3);

const customLi4 = Li("header__item");
const customLink4 = RoutingLink({
  onClick: () => routingMethod.setPage("contacts"),
  title: "Contacts",
  className: "header__link",
  id: "contacts",
});
customLi4.appendChild(customLink4);
ulElem.appendChild(customLi4);

nav.appendChild(BurgerButton);
header.appendChild(MobileMenu);

export default header;
