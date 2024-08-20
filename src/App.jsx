import { useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import bg from "./assets/img/bg.png";
import data from "./assets/data.json";
import { TopShape } from "./components/SVG";

function App() {
  const [activeChar, setActiveChar] = useState("");

  const character = data.find(
    (char) => char.name.toLowerCase() === activeChar.toLowerCase()
  );

  const theme = character ? character.theme : "#3c248c";
  const backgroundImg = character ? character.transparentimage : "";
  const shapeMain = character ? character.shapemain : "#db77e7";
  const shapeBorder = character ? character.shapeborder : "#feb4fe";

  return (
    <div className="wrapper">
      <div
        style={{
          background: `url(${bg}), ${theme} 0% 0% no-repeat`,
        }}
        className="hero"
      >
        <TopShape ShapeMain={shapeMain} ShapeBorder={shapeBorder} />
        <img className="img-hero-bg" src={backgroundImg} alt="Background" />
        <Header activeChar={activeChar} setActiveChar={setActiveChar} />
        <Info activeChar={activeChar} />
      </div>
    </div>
  );
}

export default App;
