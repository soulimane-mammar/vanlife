import { NavLink, Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-home">
        <Link to={"/"}>#VANLIFE</Link>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active nav-links" : "nav-links"
          }
          to={"/host"}
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active nav-links" : "nav-links"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active nav-links" : "nav-links"
          }
          to={"/vans"}
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;
