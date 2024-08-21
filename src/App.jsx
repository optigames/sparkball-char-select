import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import bg from "./assets/img/bg.png";
import data from "./assets/data.json";
import { TopShape } from "./components/SVG";

function App() {
  const [activeChar, setActiveChar] = useState("");

  const character = useMemo(() => {
    return data.find(
      (char) => char.name.toLowerCase() === activeChar.toLowerCase()
    );
  }, [activeChar]);

  const theme = character?.theme || "#3c248c";
  const backgroundImg = character?.transparentimage || "";
  const shapeMain = character?.shapemain || "#9d65ce";
  const shapeBorder = character?.shapeborder || "#c18eee";

  useEffect(() => {
    const imagesToPreload = [];
    data.forEach((char) => {
      if (!imagesToPreload.includes(char.art)) {
        imagesToPreload.push(char.art);
      }
      if (
        char.transparentimage &&
        !imagesToPreload.includes(char.transparentimage)
      ) {
        imagesToPreload.push(char.transparentimage);
      }
    });

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="wrapper">
      <div
        style={{
          background: `url(${bg}), ${theme} no-repeat`,
        }}
        className="hero"
      >
        <TopShape ShapeMain={shapeMain} ShapeBorder={shapeBorder} />

        {backgroundImg && (
          <img className="img-hero-bg" src={backgroundImg} alt="Background" />
        )}

        <Header activeChar={activeChar} setActiveChar={setActiveChar} />

        {activeChar && <Info activeChar={activeChar} />}
      </div>
    </div>
  );
}

export default App;
