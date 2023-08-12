import josephImage from "../../assets/foto-joseph.jpeg";
import "./index.css";

export const About = () => {
  return (
    <div className="container border-shadow about-box">
      <div className="row">
        <div className="col-6 main-content-box">
          Full Stack Developer with expertise in JavaScript, TypeScript, React,
          Node.js, Meteor.js, Git. Skilled in QA, API integration, and
          problem-solving. Strong in teamwork, project management, and
          adaptability.
        </div>
        <div className="col-6 main-content-box">
          <img src={josephImage} alt="Joseph" className="image-container" />
        </div>
        <div className="col-6 secondary-content-box">
          <h3>Tecnologias</h3>
        </div>
        <div className="col-6 secondary-content-box">aaaaaaa</div>
      </div>
    </div>
  );
};

export default About;
