import React, { useEffect } from "react";
import "./index.css";

const MainNavbar = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbar = document.querySelector(".navbar-box") as HTMLElement;
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(".navbar-box-content a");
    links.forEach((link) => {
      const targetId = link.getAttribute("href")?.substring(1);
      if (targetId) {
        link.addEventListener("click", function (e) {
          handleClick(
            e as unknown as React.MouseEvent<HTMLAnchorElement>,
            targetId
          );
        });
      }
    });
  }, []);

  return (
    <nav
      className="navbar-box navbar-border-shadow"
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="navbar-box-content">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
