import "./Header.css";
import PopcornLogo from "../../Assets/Images/popcorn_logo.png";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <a href="/">
          <img className="header-logo" src={PopcornLogo} alt="" />
        </a>
        <span>ReactCiné</span>
      </div>
    </div>
  );
};

export default Header;
