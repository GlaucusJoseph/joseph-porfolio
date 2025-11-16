import React from "react";
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

  return (
    <nav
      className="navbar-box navbar-border-shadow"
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="navbar-box-content">
        <li>
          <a href="#about" onClick={(e) => handleClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleClick(e, "experience")}>
            Experience
          </a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <span className="navbar-separator">/</span>
        </li>
        <li>
          <a href="#courses" onClick={(e) => handleClick(e, "courses")}>
            Courses
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
