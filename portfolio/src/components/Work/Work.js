import { useState, useEffect } from "react";
import "./Work.css";
import Loading from "../Loading/Loading";
import WorkCard from "../WorkCard/WorkCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Work() {
  const [workLoading, setWorkLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const items = projects.map((project) => {
    return (
      <div className="center">
        <WorkCard setModal={setModal} modal={modal} project={project} />
      </div>
    );
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      {workLoading ? (
        <Loading
          title="Work"
          setLoading={setWorkLoading}
          loading={workLoading}
        />
      ) : (
        <section id="work" className="work section">
          <div className="work__container container">
            <div className="work__title__container">
              <h1 className="work__title">
                <span aria-hidden="true">02</span>Work
              </h1>
            </div>
            <div className="work__content">
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay={!modal}
                autoPlayInterval={1500}
                infinite={true}
              />
            </div>
          </div>
          {/* modal */}
          {/* <div className={modal ? "work__modal active-modal" : "work__modal"}>
            <div className="work__modal-content">
              <h4 className="work__modal-title">Designer</h4>
              <i
                class="fa-solid fa-xmark work__modal-close"
                onClick={() => setModal(false)}
              ></i>
              <ul className="work__modal-services grid">
                <li className="work__modal-service">
                  <i class="fa-solid fa-laptop work__modal-icon"></i>
                  <p>I develop user interface</p>
                </li>
                <li className="work__modal-service">
                  <i class="fa-solid fa-laptop work__modal-icon"></i>
                  <p>I develop user interface</p>
                </li>
                <li className="work__modal-service">
                  <i class="fa-solid fa-laptop work__modal-icon"></i>
                  <p>I develop user interface</p>
                </li>
              </ul>
            </div>
          </div> */}
        </section>
      )}
    </>
  );
}

export default Work;
