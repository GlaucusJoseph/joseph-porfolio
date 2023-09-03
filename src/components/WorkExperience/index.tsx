import docmoviLogo from "../../assets/img/docmovi-logo.webp";
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

const WorkExperience = () => {
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
    <section id="experience">
      <div className="container work-experience-box">
        <h3 className="my-2 d-flex flex-row-reverse">Work Experience</h3>
        <div className="animated-line" />
        <div className="row">
          <div className="col-12 col-md-6 work-section">
            <div className="row">
              <div className="col-12">
                <img src={docmoviLogo} alt="Docmovi-logo" width="250" />
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
                <div className="icons-space">
                  {iconsList.map((Icon, index) => (
                    <div className="icon-with-text" key={index}>
                      <Icon width="30" height="30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 hide-on-mobile">
            <ul>
              <li>
                Conducted maintenance, bug fixes, and made optimizations using
                technologies such as JavaScript, TypeScript, React, Meteor.js,
                and MongoDB.
              </li>
              <li>
                Designed a new login system and optimized all the stages of the
                medical attention to accept users of different nationalities
                expanding the business to Peru.
              </li>
              <li>
                Supervised quality control through the use of end-to-end testing
                tools like Cypress.
              </li>
              <li>
                Created an appointment system that increased the number of
                patients attended by doctors by 20% per month.
              </li>
              <li>
                Integrated the Whatsapp Cloud API with the login system
                resulting in a 10% cost reduction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
