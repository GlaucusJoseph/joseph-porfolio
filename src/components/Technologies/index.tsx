import { CSharpIcon, CypressIcon, GitIcon, GithubIcon, JavaScriptIcon, MeteorIcon, MongoDBIcon, NodeJSIcon, ReactIcon, TypeScriptIcon } from "../../assets/svg";
import "./index.css";

export const Technologies = () => {
  return (
    <div className="container border-shadow technologies-box">
      <h4 className="mt-4">Technologies</h4>
      <div className="container">
        <div className="icon-with-text">
          <CSharpIcon width="70" height="70" />
          <span className="icon-text">C#</span>
        </div>
        <div className="icon-with-text">
          <CypressIcon width="70" height="70" />
          <span className="icon-text">C#</span>
        </div>
        <GithubIcon width="70" height="70" />
        <GitIcon width="70" height="70" />
        <JavaScriptIcon width="70" height="70" />
        <MeteorIcon width="70" height="70" />
        <MongoDBIcon width="70" height="70" />
        <NodeJSIcon width="70" height="70" />
        <ReactIcon width="70" height="70" />
        <TypeScriptIcon width="70" height="70" />
      </div>
    </div>
  );
};

export default Technologies;
