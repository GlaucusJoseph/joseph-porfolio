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

  return (
    <section id="technologies">
      <div className="container technologies-box">
        <h3 className="my-2">Technologies</h3>
        <div className="animated-line" />
        <div className="container icons-space">
          {iconsList.map((icon, index) => (
            <div className="icon-with-text" key={index}>
              <icon.Icon width="70" height="70" />
              <span className="icon-text">{icon.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
