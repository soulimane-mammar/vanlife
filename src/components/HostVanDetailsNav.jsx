import { NavLink } from "react-router-dom";

const HostVanDetailsNav = () => {
  return (
    <nav className="host-van-detail-nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-active nav-links" : "nav-links"
        }
        to={"."}
        end
      >
        Details
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-active nav-links" : "nav-links"
        }
        to={"pricing"}
        end
      >
        Pricing
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-active nav-links" : "nav-links"
        }
        to={"photos"}
        end
      >
        Photos
      </NavLink>
    </nav>
  );
};
export default HostVanDetailsNav;
