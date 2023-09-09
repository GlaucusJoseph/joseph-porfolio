import { CSSTransition } from "react-transition-group";
import {
  CSharpIcon,
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
import Title from "../Title";
import { useState } from "react";

const Technologies = () => {
  const iconsList = [
    { Icon: JavaScriptIcon, text: "JavaScript" },
    { Icon: NodeJSIcon, text: "NodeJS" },
    { Icon: ReactIcon, text: "React.js" },
    { Icon: TypeScriptIcon, text: "TypeScript" },
    { Icon: MeteorIcon, text: "Meteor.js" },
    { Icon: MongoDBIcon, text: "MongoDB" },
    { Icon: CypressIcon, text: "Cypress" },
    { Icon: CSharpIcon, text: "C#" },
    { Icon: GitIcon, text: "Git" },
    { Icon: GithubIcon, text: "GitHub" },
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
          <div className="container icons-space">
            {iconsList.map((icon, index) => (
              <div className="icon-with-text" key={index}>
                <icon.Icon width="70" height="70" />
                <span className="icon-text">{icon.text}</span>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Technologies;
