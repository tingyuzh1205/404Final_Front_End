import React from "react";
import { Link, NavLink } from "react-router-dom";
export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid fs-4 text-dark  ">
          <p className="navbar-brand fs-3 test-dark mt-3 fw-bold">
            Chinese Kitchen
          </p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-tiem">
                <NavLink
                  exact={true}
                  className="nav-link text-dark"
                  data-testid="nb-1"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-tiem">
                <NavLink
                  exact={true}
                  className="nav-link text-dark"
                  to="/recipes"
                  data-testid="nb-2"
                >
                  Recipes
                </NavLink>
              </li>

              <li className="nav-tiem">
                <NavLink
                  exact={true}
                  className="nav-link text-dark"
                  data-testid="nb-3"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
