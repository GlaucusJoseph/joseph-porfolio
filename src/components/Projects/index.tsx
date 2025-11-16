import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { PROJECTS_OBJECT_LIST } from "../../constants";
import Title from "../Title";
import "./index.css";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="projects">
      <div className="container projects-box">
        <Title titleText="Projects" isOpen={isOpen} setIsOpen={setIsOpen} />
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-0 justify-content-center">
              {PROJECTS_OBJECT_LIST.map((_project, index) => {
                return (
                  <div className="card" key={index}>
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
                        <p>
                          Texto de la tarjeta que se superpondrá a la imagen.
                        </p>
                      </div>
                      <div className="card-tags">
                        <p>
                          Texto de la tarjeta que se superpondrá a la imagen.
                        </p>
                      </div>
                      <button className="card-button-github">GitHub</button>
                      <button className="card-button-website">Website</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Projects;
