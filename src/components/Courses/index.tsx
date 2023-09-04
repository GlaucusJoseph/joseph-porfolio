import platziLogo from "../../assets/img/platzilogo.webp";
import {
  CypressIcon,
  GitIcon,
  GithubIcon,
  JavaScriptIcon,
  MeteorIcon,
  MongoDBIcon,
  NodeJSIcon,
  ReactIcon,
  TypeScriptIcon,
} from "../../assets/svg";
import "./index.css";

const Courses = () => {
  const iconsList = [
    JavaScriptIcon,
    NodeJSIcon,
    ReactIcon,
    TypeScriptIcon,
    MeteorIcon,
    MongoDBIcon,
    CypressIcon,
    GitIcon,
    GithubIcon,
  ];

  return (
    <section id="courses">
      <div className="container curses-box">
        <h3 className="my-2">Courses</h3>
        <div className="animated-line" />
        <div className="row">
          <div className="col-12 col-md-6 work-section">
            <div className="row">
              <div className="col-12">
                <img src={platziLogo} alt="Platzi-logo" width="250" />
              </div>
              <div className="col-12">
                <h5>Docmovi</h5>
              </div>
              <div className="col-12">
                <h6>Full Stack Developer</h6>
              </div>
              <div className="col-12">
                <label>July, 2022 - Present</label>
              </div>
              <div className="col-12 mt-2">
                <div className="courses-icons">
                  {iconsList.map((Icon, index) => (
                    <div className="courses-icon-margin" key={index}>
                      <Icon width="30" height="30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 work-section">
            <div className="row">
              <div className="col-12">
                <img src={platziLogo} alt="Docmovi-logo" width="250" />
              </div>
              <div className="col-12">
                <h6>Full Stack Developer</h6>
              </div>
              <div className="col-12">
                <label>July, 2022 - Present</label>
              </div>
              <div className="col-12 mt-2">
                <div className="courses-icons">
                  {iconsList.map((Icon, index) => (
                    <div className="courses-icon-margin" key={index}>
                      <Icon width="30" height="30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
