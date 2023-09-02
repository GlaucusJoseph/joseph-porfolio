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

export const Technologies = () => {
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
    <div className="container technologies-box">
      <h4 className="my-4">Technologies</h4>
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
  );
};

export default Technologies;
