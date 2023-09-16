import { CSSTransition } from "react-transition-group";
import "./index.css";
import Title from "../Title";
import { useState } from "react";
import { TECHNOLOGIES_OBJECT } from "../../constants";

const Technologies = () => {
  const {
    csharp,
    git,
    github,
    reactjs,
    javascript,
    nodejs,
    bootstrap,
    typescript,
    meteorjs,
    cypress,
  } = TECHNOLOGIES_OBJECT;

  const myStackList = [
    javascript,
    nodejs,
    reactjs,
    typescript,
    meteorjs,
    cypress,
    csharp,
    github,
    git,
    bootstrap,
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="technologies">
      <div className="container technologies-box">
        <Title titleText="Technologies" isOpen={isOpen} setIsOpen={setIsOpen} />

        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className="container technology-icons-space">
            {myStackList.map((stackTechnology, index) => (
              <div className="technology-icon-with-text" key={index}>
                <stackTechnology.icon width="70" height="70" />
                <span className="technology-icon-text">
                  {stackTechnology.name}
                </span>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Technologies;
