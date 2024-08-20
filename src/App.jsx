import Header from "./components/Header";
import bg from "./assets/img/bg.png";
import heroBig from "./assets/img/hero/inktsy-bg.png";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [activeChar, setActiveChar] = useState("");

  return (
    <div className="wrapper">
      <div className="hero">
        <img className="img-bg" src={bg} alt="Image" />
        <img className="img-hero-bg" src={heroBig} alt="Image" />
        <Header activeChar={activeChar} setActiveChar={setActiveChar} />
        <Info activeChar={activeChar} />
      </div>
    </div>
  );
}

export default App;
