import PropTypes from "prop-types";
import logo from "../assets/img/logo.png";
import sparkballLogo from "../assets/img/sparkball-logo.png";
import menu from "../assets/img/menu.png";
import Slider from "./Slider";

export default function Header({ activeChar, setActiveChar }) {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="" />
      </a>
      <div className="header__right">
        <Slider activeChar={activeChar} setActiveChar={setActiveChar} />
        <div className="header__buttons">
          <img className="header__menu" src={menu} alt="" />
          <a href="#" className="header__sparkboll-logo">
            <img src={sparkballLogo} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  activeChar: PropTypes.string.isRequired,
  setActiveChar: PropTypes.func.isRequired,
};
