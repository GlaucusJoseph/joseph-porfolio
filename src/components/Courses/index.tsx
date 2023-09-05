import { COURSES_OBJECT_LIST } from "../../constants";
import "./index.css";

const Courses = () => {
  return (
    <section id="courses">
      <div className="container curses-box">
        <h3 className="my-2">Courses</h3>
        <div className="animated-line" />
        <div className="row">
          {COURSES_OBJECT_LIST.map((course) => {
            return (
              <div className="col-12 col-md-6 course-box-size">
                <a href={course.url} target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
};

export default Courses;
