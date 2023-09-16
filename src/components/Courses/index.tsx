import { CSSTransition } from "react-transition-group";
import { COURSES_OBJECT_LIST } from "../../constants";
import "./index.css";
import { useState } from "react";
import Title from "../Title";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="courses">
      <div className="container courses-box">
        <Title titleText="Courses" isOpen={isOpen} setIsOpen={setIsOpen} />
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className="row">
            {COURSES_OBJECT_LIST.map((course, index) => {
              console.log(course);
              return (
                <div className="col-12 col-md-6" key={index}>
                  <div className="row container course-box">
                    <div className="col-12 course-title-envelop">
                      <h6>
                        {course.institution} /&nbsp;
                        <span className="special-text-color">
                          {course.title}
                        </span>
                      </h6>
                    </div>
                    <div className="col-12">
                      <div className="courses-tags">
                        {course.technologies.map((technology, index) => (
                          <div key={index} className="courses-tag">
                            &lt;{technology.name}/&gt;
                          </div>
                        ))}
                      </div>
                    </div>
                    {course.url && (
                      <div className="button-envelop">
                        <a
                          href={course.url}
                          className="course-button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Courses;
