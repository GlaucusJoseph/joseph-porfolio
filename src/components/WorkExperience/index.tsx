import { CSSTransition } from "react-transition-group";
import docmoviLogo from "../../assets/img/docmovi-logo.webp";
import "./index.css";
import Title from "../Title";
import { useState } from "react";
import { TECHNOLOGIES_OBJECT } from "../../constants";

const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    git,
    github,
    reactjs,
    javascript,
    nodejs,
    bootstrap,
    typescript,
    meteorjs,
    cypress,
    mongodb,
  } = TECHNOLOGIES_OBJECT;

  const docmoviStack = [
    javascript,
    nodejs,
    reactjs,
    typescript,
    meteorjs,
    mongodb,
    cypress,
    github,
    git,
    bootstrap,
  ];

  return (
    <section id="experience">
      <div className="container work-experience-box">
        <Title
          titleText="Work Experience"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
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
                  <div className="work-icons-space">
                    {docmoviStack.map((technology, index) => (
                      <div className="work-icon-with-text" key={index}>
                        <technology.icon width="30" height="30" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 work-hide-on-mobile">
              <ul>
                <li>
                  Conducted maintenance, bug fixes, and made optimizations using
                  technologies such as JavaScript, TypeScript, React, Meteor.js,
                  and MongoDB.
                </li>
                <li>
                  Designed a new login system and optimized all the stages of
                  the medical attention to accept users of different
                  nationalities expanding the business to Peru.
                </li>
                <li>
                  Supervised quality control through the use of end-to-end
                  testing tools like Cypress.
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
        </CSSTransition>
      </div>
    </section>
  );
};

export default WorkExperience;
