import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WorkPage.css";

function WorkPage() {
  const [project, setProject] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/projects/${params.id}`)
      .then((r) => r.json())
      .then((data) => setProject(data));
  }, [params]);

  // const convert_content = (data) => {
  //   if (!data) return;
  //   return data.replace(/\n/g, <br></br>);
  // };

  function insert_techs(data) {
    if (!data) return;
    return data.map((tech) => {
      return <li key={tech.id}>{tech.name}</li>;
    });
  }

  return (
    <section id="work_page" className="work_page section">
      <div className="work_page__container container grid">
        <div className="work_page__title__container">
          <h1 className="work_page__title">
            <span aria-hidden="true">02</span>Work
            <span aria-hidden="true">:</span>
            {project.name}
          </h1>
        </div>
        <div className="work_page__cover">
          <img src={project.project_main_image} alt="cover" />
        </div>
        <div className="work_page__content grid">
          <div className="work_page__details">
            <p>{project.description}</p>
          </div>
          <div>
            <div className="work_page__skills">
              <ul className="work_page__skill_list">
                <h4>Technologies</h4>
                {insert_techs(project.technologies)}
              </ul>

              <ul className="work_page__link_list">
                <li>
                  <a href={project.github}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href={project.demo}>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WorkPage;
