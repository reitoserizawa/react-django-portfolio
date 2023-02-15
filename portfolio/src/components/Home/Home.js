import "./Home.css";
import image from "../../images/home__blob-image.png";

function Home() {
  return (
    <section id="home" class="home section">
      <div class="home__container container grid">
        <div class="home__content grid">
          <div class="home__social">
            <div class="thought">
              <div class="home__social-list">
                <a
                  class="home__social-icon"
                  href="https://www.linkedin.com/in/reitos/"
                  tagret="_blank"
                >
                  <i class="fa-brands fa-linkedin-in fa-xl"></i>
                </a>
                <a
                  class="home__social-icon"
                  href="https://github.com/reitoserizawa"
                  tagret="_blank"
                >
                  <i class="fa-brands fa-github fa-xl"></i>
                </a>
                <a
                  class="home__social-icon"
                  href="https://medium.com/@s.reitiger"
                  tagret="_blank"
                >
                  <i class="fa-brands fa-medium fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="home__blob">
            <img class="home__blob-img" src={image} />
          </div>
          <div class="home__data">
            <h1 class="home__title">Reito Serizawa</h1>
            <h3 class="home__subtitle">Full-stack developer</h3>
            <p class="home__description">
              Hello, I am Reito Serizawa. I am a full-stack software engineer in
              NYC. I was born in Tokyo, Japan and grow up by Mt. Fuiji.
            </p>
            <a href="#contact" class="button button--flex">
              Contact me<i class="fa-regular fa-envelope button__icon"></i>
            </a>
          </div>
          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="fa-solid fa-computer-mouse home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll down</span>
              <i class="fa-solid fa-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
