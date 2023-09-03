import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const HostLayout = () => {
  const hostNavStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#161616",
    borderBottom: "1px solid black",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
          to={"."}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
          to={"income"}
          end
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
          to={"vans"}
          end
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? hostNavStyle : null)}
          to={"reviews"}
          end
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
