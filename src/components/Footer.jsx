import optiLogo from "../assets/img/optigames-logo.png";

export default function footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__info">
          <a href="#">
            <img src={optiLogo} alt="" />
          </a>
          © 2024 Opti Games, All Rights Reserved
        </div>
      </div>
      <div className="footer__rotated-text">
        <div className="footer__rotated-title">FIND YOUR SPARK</div>
        <div className="footer__rotated-subtitle">#letsplaysparkball</div>
      </div>
    </div>
  );
}
