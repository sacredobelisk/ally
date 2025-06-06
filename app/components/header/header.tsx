import { Link } from "react-router";
import { Nav } from "../nav/nav";

import logo from "./logo.png";

import "./index.scss";

export const Header = () => (
  <header>
    <h1>
      <Link to="/">
        <img src={logo} alt="Allison Weinreb O'Brien" />
      </Link>
    </h1>
    <Nav />
  </header>
);
