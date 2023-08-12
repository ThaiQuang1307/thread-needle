import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const isActiveLink = (e) => {
    return e.isActive ? "link--active" : "";
  };

  return (
    <>
      <div className="layout-default__header">
        <div className="layout-default__wrap">
          <ul className="layout-default__nav">
            <li>
              <NavLink to="/" className={isActiveLink}>
                home <span>-</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className={isActiveLink}>
                works <span>-</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={isActiveLink}>
                about <span>-</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={isActiveLink}>
                careers <span>-</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={isActiveLink}>
                contact <span>-</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
