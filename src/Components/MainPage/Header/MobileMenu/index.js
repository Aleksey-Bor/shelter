import routingMethod from "../../../../../routingMethod";
import htmlToElement from "../../../../utils/htmlToElement";
import Li from "../../../helpers/LiMaker";
import RoutingLink from "../../../helpers/RoutingLinkMaker";
import MobileMenu from "./index.html";
import "./index.scss";

const mobileMenu = htmlToElement(MobileMenu);
const ulElem = mobileMenu.getElementsByClassName("mobile-menu")[0];

export const showMenu = (nameClass) => {
  ulElem.classList.toggle(nameClass);
};

const customLi1 = Li("mobile-menu__item");
const customLink1 = RoutingLink({
  onClick: () => routingMethod.setPage(""),
  title: "About the shelter",
  className: "mobile-menu__link",
  id: "",
});
customLi1.appendChild(customLink1);
ulElem.appendChild(customLi1);

const customLi2 = Li("mobile-menu__item");
const customLink2 = RoutingLink({
  onClick: () => routingMethod.setPage(""),
  title: "Our pets",
  className: "mobile-menu__link",
  id: "ourpets",
});
customLi2.appendChild(customLink2);
ulElem.appendChild(customLi2);

const customLi3 = Li("mobile-menu__item");
const customLink3 = RoutingLink({
  onClick: () => routingMethod.setPage(""),
  title: "Help the shelter",
  className: "mobile-menu__link",
  id: "help",
});
customLi3.appendChild(customLink3);
ulElem.appendChild(customLi3);

const customLi4 = Li("mobile-menu__item");
const customLink4 = RoutingLink({
  onClick: () => routingMethod.setPage(""),
  title: "Contacts",
  className: "mobile-menu__link",
  id: "contacts",
});
customLi4.appendChild(customLink4);
ulElem.appendChild(customLi4);

export default mobileMenu;
