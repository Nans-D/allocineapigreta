import "./Header.css";
import PopcornLogo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <a href="/">
          <img className="header-logo" src={PopcornLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
