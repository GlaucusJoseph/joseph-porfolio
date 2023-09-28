import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  About,
  Courses,
  MainNavbar,
  Technologies,
  WorkExperience,
  /*   Projects, */
} from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainNavbar />
    <About />
    <WorkExperience />
    {/* 
  <Projects /> */}
    <Technologies />
    <Courses />
  </React.StrictMode>
);
