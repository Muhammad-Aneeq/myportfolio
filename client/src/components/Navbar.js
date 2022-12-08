import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      console.log(state);
      return (
        <>
          <NavLink className="nav-link " to="/">
            Home
          </NavLink>
          <NavLink className="nav-link " to="/about">
            About
          </NavLink>
          <NavLink className="nav-link " to="/logout">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="nav-link " to="/">
            Home
          </NavLink>
          <NavLink className="nav-link " to="/about">
            About
          </NavLink>
          <NavLink className="nav-link " to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link " to="/signup">
            Registeration
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid px-5 ">
          <NavLink className="navbar-brand fw-bold" to="/">
            MERN STACK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto px-5">
              <RenderMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
