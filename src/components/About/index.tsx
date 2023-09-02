import { GithubIcon } from "../../assets/GithubIcon";
import { LinkedinIcon } from "../../assets/LinkedinIcon";
import josephImage from "../../assets/foto-joseph.jpeg";
import "./index.css";

export const About = () => {
  return (
    <div className="container border-shadow about-box">
      <div className="row">
        <div className="col-12 col-md-6 main-content-box">
          <div className="image-container">
            <img src={josephImage} alt="Joseph" />
          </div>
        </div>
        <div className="col-12 col-md-6 main-content-box">
          <h3>Hello, I am Joseph Ortega!</h3>
          <label className="my-3">
            Full Stack Developer with expertise in JavaScript, TypeScript,
            React, Node.js, Meteor.js, Git. Skilled in QA, API integration, and
            problem-solving. Strong in teamwork, project management, and
            adaptability.
          </label>
          <div className="container">
            <LinkedinIcon width="70" height="70" />
            <LinkedinIcon width="70" height="70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
