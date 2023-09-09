import { CSSTransition } from "react-transition-group";
import { COURSES_OBJECT_LIST } from "../../constants";
import "./index.css";
import { useState } from "react";
import Title from "../Title";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="courses">
      <div className="container curses-box">
        <Title titleText="Courses" isOpen={isOpen} setIsOpen={setIsOpen} />
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className="row">
            {COURSES_OBJECT_LIST.map((course, index) => {
              return (
                <div className="col-12 col-md-6 course-box-size" key={index}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="row">
                      <div className="col-12">
                        <h6>
                          {course.institution} /&nbsp;
                          <span className="special-text-color">
                            {course.title}
                          </span>
                        </h6>
                      </div>
                      <div className="col-12">{course.date}</div>
                      <div className="col-12">
                        <div className="courses-icons">
                          {course.technologies.map((Icon, index) => (
                            <div key={index} className="courses-icon-margin">
                              <Icon width="30" height="30" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
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
