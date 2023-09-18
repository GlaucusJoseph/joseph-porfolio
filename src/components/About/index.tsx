import josephImage from "../../assets/img/joseph-photo.png";
import { TECHNOLOGIES_OBJECT } from "../../constants";
import "./index.css";

interface IconProps {
  profileUrl: string;
  width: string;
  height: string;
  icon: {
    name: string;
    icon: React.FC<{ width?: string; height?: string }>;
  };
}

const IconLinkEnvelop: React.FC<IconProps> = ({
  profileUrl,
  width,
  height,
  icon,
}) => {
  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={icon.name}
    >
      <icon.icon width={width} height={height} />
    </a>
  );
};

const About = () => {
  const { github, linkedin } = TECHNOLOGIES_OBJECT;
  const myGitHubUrl = "https://github.com/GlaucusJoseph";
  const myLinkedinUrl = "https://www.linkedin.com/in/josephortegaglaucus/";

  return (
    <section id="about">
      <div className="container about-box about-border-shadow">
        <div className="about-content-box">
          <div className="about-image-container about-img-shadow">
            <img src={josephImage} alt="Joseph" />
          </div>
        </div>
        <div className="about-content-box">
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
              icon={linkedin}
            />
            <IconLinkEnvelop
              profileUrl={myGitHubUrl}
              width="70"
              height="70"
              icon={github}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
