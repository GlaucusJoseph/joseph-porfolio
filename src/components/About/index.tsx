import { LinkedinIcon, GithubIcon } from "../../assets/svg";
import josephImage from "../../assets/img/foto-joseph.jpeg";
import "./index.css";

interface IconProps {
  profileUrl: string;
  width: string;
  height: string;
  Icon: React.FC<{ width?: string; height?: string }>; // How to import a React component, in this case a svg file
}

const IconLinkEnvelop: React.FC<IconProps> = ({
  profileUrl,
  width,
  height,
  Icon,
}) => {
  let title = "";
  if (Icon === GithubIcon) {
    title = "GitHub";
  }
  if (Icon === LinkedinIcon) {
    title = "Linkedin";
  }

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Icon width={width} height={height} />
    </a>
  );
};

export const About = () => {
  const myGitHubUrl = "https://github.com/GlaucusJoseph";
  const myLinkedinUrl = "https://www.linkedin.com/in/josephortegaglaucus/";

  return (
    <div className="container border-shadow about-box">
      <div className="row">
        <div className="col-12 col-md-6 main-content-box">
          <div className="image-container">
            <img src={josephImage} alt="Joseph" />
          </div>
        </div>
        <div className="col-12 col-md-6 main-content-box">
          <h3>Hi, I am Joseph Ortega!</h3>
          <label className="my-3">
            Full Stack Developer with expertise in JavaScript, TypeScript,
            React, Node.js, Meteor.js, Git. Skilled in QA, API integration, and
            problem-solving. Strong in teamwork, project management, and
            adaptability.
          </label>
          <div className="container">
            <IconLinkEnvelop
              profileUrl={myLinkedinUrl}
              width="70"
              height="70"
              Icon={LinkedinIcon}
            />
            <IconLinkEnvelop
              profileUrl={myGitHubUrl}
              width="70"
              height="70"
              Icon={GithubIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
