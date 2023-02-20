import "./WorkPage.css";
import collage from "../../images/collage3.png";

function WorkPage() {
  return (
    <section id="work_page" className="work_page section">
      <div className="work_page__container container grid">
        <div className="work_page__title__container">
          <h1 className="work_page__title">
            <span aria-hidden="true">02.01</span>Zoomies
          </h1>
        </div>
        <div className="work_page__cover">
          <img src={collage} alt="cover" />
        </div>
        <div className="work_page__content grid">
          <div className="work_page__details">
            <p>
              I was born and raised in Japan and immigrated to the U.S. in
              December, 2021. In Japan, tipping can be seen as rude because they
              value dignity and respect much more than tipping. Though, since it
              is a common practice, I wanted to make an application that you can
              tip without letting them know. In addition, I wanted to connect
              othwer people with good restaurants, as well as know about servers
              other than their service, so I made a review and profile system
              for both restaurants and servers.
            </p>
          </div>
          <div className="work_page__skills">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
            </ul>
            <ul>
              <li>GitHub</li>
              <li>Demo</li>
            </ul>
          </div>
          <div className="work_page__links"></div>
        </div>
      </div>
    </section>
  );
}
export default WorkPage;
