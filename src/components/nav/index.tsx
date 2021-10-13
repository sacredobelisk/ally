import { NavLink } from "react-router-dom";

import "./index.scss";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="nav-about">
          <NavLink to="/" exact>
            About
          </NavLink>
        </li>
        <li className="nav-portfolio">
          <NavLink to="/portfolio">Portfolio</NavLink>
          <ul>
            <li>
              <NavLink to="/portfolio/retouch">retouch</NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-resume">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="nav-contact">
          <a href="mailto:allyswo@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
