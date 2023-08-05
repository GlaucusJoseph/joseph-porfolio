import "./MainNavbar.css";

export const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-new-style">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item mx-5">
              <a className="link-style" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="link-style" aria-current="page" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="link-style" aria-current="page" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
