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

const About = () => {
  const myGitHubUrl = "https://github.com/GlaucusJoseph";
  const myLinkedinUrl = "https://www.linkedin.com/in/josephortegaglaucus/";

  return (
    <section id="about">
      <div className="container border-shadow about-box">
        <div className="row">
          <div className="col-12 col-md-4 main-content-box">
            <div className="image-container">
              <img src={josephImage} alt="Joseph" />
            </div>
          </div>
          <div className="col-12 col-md-7 main-content-box">
            <h3>
              Hi, I am&nbsp;
              <label className="special-text-color">Joseph Ortega</label>!
            </h3>
            <label className="my-3">
              <span className="special-text-color">Full Stack Developer </span>
              specializing in&nbsp;
              <span className="special-text-color">
                JavaScript, TypeScript, React, Node.js, Meteor.js, and Git
              </span>
              . Highly skilled in <span className="special-text-color">QA</span>
              ,&nbsp;
              <span className="special-text-color">API integration</span>, and
              problem-solving, with a strong aptitude for teamwork and
              adaptability. Committed to seeking innovative solutions and
              contributing valuable skills to drive transformative outcomes.
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
    </section>
  );
};

export default About;
