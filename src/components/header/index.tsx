import { Link } from "react-router-dom";

import { Nav } from "../nav";

import logo from "./logo.gif";
import "./index.scss";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src={logo} alt="Allison Weinreb O'Brien" />
        </Link>
      </h1>
      <Nav />
    </header>
  );
};
