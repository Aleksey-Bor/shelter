import htmlToElement from "../../../../utils/htmlToElement";
import MobileMenu from "./index.html";
import "./index.scss";

const mobileMenu = htmlToElement(MobileMenu);
const menu = mobileMenu.getElementsByClassName("mobile-menu")[0];

export const showMenu = () => {
  menu.classList.add("open");
};
// mobileMenu.addEventListener("click", showMenu);

export default mobileMenu;
