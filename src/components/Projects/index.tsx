import { COURSES_OBJECT_LIST } from "../../constants";
import "./index.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects-box">
        <h3 className="my-2">Projects</h3>
        <div className="animated-line" />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-0 justify-content-center">
            {COURSES_OBJECT_LIST.map((course) => {
              return (
                <div className="card">
                  <img
                    className="card-image"
                    src="https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Descripción de la imagen"
                  />
                  <div className="card-content">
                    <div className="card-title">
                      <h5>Projecto Generico Formulario</h5>
                    </div>
                    <div className="card-description">
                      <p>Texto de la tarjeta que se superpondrá a la imagen.</p>
                    </div>
                    <div className="card-tags">
                      <p>Texto de la tarjeta que se superpondrá a la imagen.</p>
                    </div>
                    <button className="card-button-github">GitHub</button>
                    <button className="card-button-website">Website</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
