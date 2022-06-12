import htmlToElement from "../../../../utils/htmlToElement";
import { showMenu } from "../MobileMenu";
import BurgerButton from "./index.html";
import "./index.scss";

const burger = htmlToElement(BurgerButton);

burger.addEventListener("click", showMenu);
export default burger;
