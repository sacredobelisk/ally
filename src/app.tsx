import { Outlet } from "react-router";

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
