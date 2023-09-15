import { NavLink } from "react-router-dom";

import "./index.scss";

export const Nav = () => (
  <nav>
    <ul>
      <li className="nav-about">
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li className="nav-retouching">
        <NavLink to="/portfolio/retouching">Retouching</NavLink>
      </li>
      <li className="nav-graphic-design">
        <NavLink to="/portfolio/graphic-design">Graphic Design</NavLink>
      </li>
      <li className="nav-resume">
        <NavLink to="/resume">Resume</NavLink>
      </li>
      <li className="nav-contact">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);
