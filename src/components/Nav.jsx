import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-home">
        <Link to={"/"}>#VANLIFE</Link>
      </div>
      <div className="nav-links">
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Vans</Link>
      </div>
    </nav>
  );
};
export default Nav;
