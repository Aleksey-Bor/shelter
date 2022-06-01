import data from "../routingData";
import StartScreen from "./Components/MainPage/StartScreen";
import HeaderTest from "./Components/OurPets/HeaderTest/index";
import "./index.scss";

function rerenderApp() {
  const root = document.getElementById("root");
  let page = window.location.pathname;
  console.log(page);

  root.append(StartScreen);
  console.log("Rerender happened!");
  switch (page) {
    case 2:
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case 3:
      root.lastChild.remove();
      root.append(HeaderTest);
      break;
    case 4:
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
