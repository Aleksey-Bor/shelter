import htmlToElement from "../../utils/htmlToElement";
import AboutPetsElem from "../MainPage/AboutPets";
import StartScreen from "../MainPage/StartScreen";
import Wrapper from "./index.html";
import "./index.scss";

const wrapper = htmlToElement(Wrapper);
wrapper.appendChild(StartScreen);
wrapper.appendChild(AboutPetsElem);

export default wrapper;
