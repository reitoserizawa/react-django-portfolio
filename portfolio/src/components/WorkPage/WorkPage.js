import "./WorkPage.css";
import collage from "../../images/collage3.png";

function WorkPage() {
  return (
    <section id="work_page" className="work_page section">
      <div className="work_page__container container grid">
        <div className="work_page__title__container">
          <h1 className="work_page__title">
            <span aria-hidden="true">02</span>Work
            <span aria-hidden="true">:</span>Zoomies
          </h1>
        </div>
        <div className="work_page__cover">
          <img src={collage} alt="cover" />
        </div>
        <div className="work_page__content grid">
          <div className="work_page__details">
            <p>
              This is a dog park application created with front-end
              technologies, such as JavaScript and React, as well as back-end
              technologies, such as Ruby and Ruby on Rails, and the database
              management system PostgreSQL.
            </p>
            <p>
              You can create a profile of yourself and pet dogs, and check in
              and out at dog parks in NYC.
            </p>
            <p>
              You can also see dogs that are checked in at each dog park with
              profiles and how busy the dog park is.
            </p>
          </div>
          <div>
            <div className="work_page__skills">
              <ul className="work_page__skill_list">
                <h4>Technologies</h4>
                <li>JavaScript</li>
                <li>React</li>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>

              <ul className="work_page__link_list">
                <li>
                  <i class="fa-brands fa-github"></i>
                </li>
                <li>
                  <i class="fa-brands fa-youtube"></i>
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
