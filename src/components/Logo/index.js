import logo from "../../images/logo.svg";
import "./Logo.scss";

function Logo() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}

export default Logo;
