import "./index.css";

const MainNavbar = () => {
  return (
    <nav
      className="navbar-box navbar-border-shadow"
      role="navigation"
      aria-label="Main Navigation"
    >
      <ul className="navbar-box-content">
        <li>
          <a href="#about">About me</a>
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
