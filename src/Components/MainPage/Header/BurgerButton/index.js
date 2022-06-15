import htmlToElement from "../../../../utils/htmlToElement";
import { showMenu } from "../MobileMenu";
import BurgerButton from "./index.html";
import "./index.scss";

const burger = htmlToElement(BurgerButton);

const turnBurger = () => {
  burger.classList.toggle("turned");
  showMenu("open");
};

burger.addEventListener("click", turnBurger);
export default burger;
