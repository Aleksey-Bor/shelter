import htmlToElement from "../../../utils/htmlToElement";
import Header from "../Header/index";
import StartScreen from "./index.html";
import "./index.scss";

const startScreen = htmlToElement(StartScreen);
const wrapperElem = startScreen.getElementsByClassName("wrapper")[0];

wrapperElem.prepend(Header);

export default startScreen;
