import { NavLink } from "react-router";
import { PortfolioType } from "../portfolio/types";

import "./index.scss";

export const Nav = () => (
  <nav>
    <ul>
      <li className="nav-about">
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li className={`nav-${PortfolioType.Retouching}`}>
        <NavLink to={`/portfolio/${PortfolioType.Retouching}`}>Retouching</NavLink>
      </li>
      <li className={`nav-${PortfolioType.GraphicDesign}`}>
        <NavLink to={`/portfolio/${PortfolioType.GraphicDesign}`}>Graphic Design</NavLink>
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
