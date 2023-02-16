import "./Home.css";
import image from "../../images/home__blob-image.png";

function Home() {
  return (
    <section id="home" className="home section">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <div className="thought">
              <div className="home__social-list">
                <a
                  className="home__social-icon"
                  href="https://www.linkedin.com/in/reitos/"
                  tagret="_blank"
                >
                  <i className="fa-brands fa-linkedin-in fa-xl"></i>
                </a>
                <a
                  className="home__social-icon"
                  href="https://github.com/reitoserizawa"
                  tagret="_blank"
                >
                  <i class="fa-brands fa-github fa-xl"></i>
                </a>
                <a
                  className="home__social-icon"
                  href="https://medium.com/@s.reitiger"
                  tagret="_blank"
                >
                  <i className="fa-brands fa-medium fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="home__blob">
            <img class="home__blob-profile" src={image} alt="home-profile" />
          </div>
          <div className="home__data">
            <h1 className="home__title">Reito Serizawa</h1>
            <h3 className="home__subtitle">Full-stack developer</h3>
            <p className="home__description">
              I am a full-stack software engineer in NYC. I was born in Tokyo,
              Japan and grew up by Mt. Fuiji. I love the outdoors, wine and
              cocktails.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me<i className="fa-regular fa-envelope button__icon"></i>
            </a>
          </div>
          {/* <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="fa-solid fa-computer-mouse home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll down</span>
              <i class="fa-solid fa-arrow-down home__scroll-arrow"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
