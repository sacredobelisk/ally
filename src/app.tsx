import { Outlet } from "react-router-dom";

import { Header } from "./components/header";

import "./app.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
