import { Link } from "react-router-dom";
import "./WorkCard.css";
import sample1 from "../../images/sample1.jpeg";
import sample2 from "../../images/sample2.png";
import sample3 from "../../images/sample3.png";
import sample4 from "../../images/sample4.png";

function WorkCard() {
  return (
    <>
      <div className="work_card__container">
        <div className="work_card__front">
          <img className="work_card__thumbnail" src={sample1} alt="sample" />
          <h3 className="work_card__name" alt="project cover">
            Project Name
          </h3>
          <div className="work_card__stats">
            <p className="work_card__left">Techs</p>
            <div className="work_card__techs">
              <img src={sample2} alt="tech icon" />
              <img src={sample3} alt="tech icon" />
              <img src={sample4} alt="tech icon" />
            </div>
          </div>
        </div>
        <div className="work_card__back">
          <div className="work_card__links">
            <p className="work_card__link">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </p>
            <p className="work_card__link">
              <i className="fa-brands fa-youtube"></i>
              <span>Demo</span>
            </p>
          </div>
          <Link to={`/work/1`}>
            <button className="work_card__btn">See details</button>
          </Link>
          <div className="work_card__techs">
            <div className="work_card__tech">
              <div className="work_card__tech_icon">
                <img src={sample2} alt="tech icon" />
              </div>
              <p className="work_card__tech_name">JS</p>
            </div>
            <div className="work_card__tech">
              <div className="work_card__tech_icon">
                <img src={sample3} alt="tech icon" />
              </div>
              <p className="work_card__tech_name">Python</p>
            </div>
            <div className="work_card__tech">
              <div className="work_card__tech_icon">
                <img src={sample4} alt="tech icon" />
              </div>
              <p className="work_card__tech_name">SQL</p>
            </div>
          </div>
        </div>
        <div className="work_card__background">
          <img className="work_card__thumbnail" src={sample1} alt="sample" />
        </div>
      </div>
      <svg width="0" height="0" x="0px" y="0px">
        <defs>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-200 0"
              begin="0s"
              dur="10s"
              repeatCount="indefinite"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default WorkCard;
