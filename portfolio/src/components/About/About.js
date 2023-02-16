import "./About.css";
import image from "../../images/about__blob.jpg";

function About() {
  return (
    <section id="about" className="about section tag soft_gray">
      <div className="about__container container grid">
        <div className="about__content grid">
          <h1 className="about__title">
            <span aria-hidden="true">01</span>About
          </h1>
          <div className="about__data">
            <p>
              Hello, world! I am Reito Serizawa. Prior to pursuing a career as a
              software engineer, I was a sales and marketing professional. When
              I immigrated to the U.S. from Japan in December 2021, I decided to
              go to Flatiron School in NYC.
            </p>
            <p>
              I learned both frontend and backend engineering such as
              JavaScript, Ruby, React, Ruby on Rails, HTML and CSS at the
              Bootcamp, and continuously studied other technologies such as
              Python and Django after graduation.
            </p>
            <p>
              When I code, I feel like there is nothing else but me and my
              energy keeps coming. I am updating my projects daily, so feel free
              to check my GitHub.
            </p>
          </div>
          <div class="about__blob">
            <img src={image} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
