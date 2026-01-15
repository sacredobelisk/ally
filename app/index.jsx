import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { App } from "./app";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Portfolio } from "./components/portfolio";
import { Resume } from "./components/resume";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/:portfolioType" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
