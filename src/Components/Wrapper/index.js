import htmlToElement from "../../utils/htmlToElement";
import AboutShelterElem from "../MainPage/AboutShelter";
import AboutFriendsElem from "../MainPage/OurFriends";
import StartScreen from "../MainPage/StartScreen";
import Wrapper from "./index.html";
import "./index.scss";

const wrapper = htmlToElement(Wrapper);
wrapper.appendChild(StartScreen);
wrapper.appendChild(AboutShelterElem);
wrapper.appendChild(AboutFriendsElem);

export default wrapper;
