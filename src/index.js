import data from "../routingData";
import StartScreen from "./Components/MainPage/StartScreen";
import HeaderTest from "./Components/OurPets/HeaderTest/index";
import "./index.scss";

function rerenderApp() {
  const root = document.getElementById("root");
  let page = window.location.pathname;
  root.append(StartScreen);

  console.log("Rerender happened!");
  switch (page) {
    case "ourpets":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case "help":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case "contacts":
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    default:
      root.lastChild.remove();
      root.append(StartScreen);
  }
}

rerenderApp();
data.subscribe(rerenderApp);
