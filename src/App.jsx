import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Spotlight from "./components/Stats/Spotlight";
import bg from "./assets/img/bg.png";
import data from "./assets/data.json";
import { BottomShadow, BottomShape, TopShape } from "./components/SVG";
import Footer from "./components/Footer";

function App() {
  const [activeChar, setActiveChar] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ABILITIES");
  const [isOpen, setOpen] = useState(false);

  const character = useMemo(
    () =>
      data.find((char) => char.name.toLowerCase() === activeChar.toLowerCase()),
    [activeChar]
  );

  const theme = character?.theme || "#3c248c";
  const shapeMain = character?.shapemain || "#9d65ce";
  const shapeBorder = character?.shapeborder || "#c18eee";
  const youtubeId = character?.spotlightlink || "Fvk0a0wvUzk";

  useEffect(() => {
    const imagesToPreload = data.reduce((acc, char) => {
      if (char.art && !acc.includes(char.art)) acc.push(char.art);
      return acc;
    }, []);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      style={{
        background: `url(${bg}) 50% 50% / cover, ${theme} no-repeat`,
      }}
      className="wrapper"
    >
      <div className="hero">
        <TopShape ShapeMain={shapeMain} ShapeBorder={shapeBorder} />
        <BottomShape ShapeMain={shapeMain} ShapeBorder={shapeBorder} />
        <BottomShadow ShapeMain={shapeMain} ShapeBorder={shapeBorder} />

        <Header activeChar={activeChar} setActiveChar={setActiveChar} />

        {activeChar && (
          <Info
            activeChar={activeChar}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setOpen={setOpen}
          />
        )}
      </div>
      {selectedCategory === "HERO SPOTLIGHT" && (
        <Spotlight
          isOpen={isOpen}
          setOpen={setOpen}
          setSelectedCategory={setSelectedCategory}
          youtubeId={youtubeId}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
