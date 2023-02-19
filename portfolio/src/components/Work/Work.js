import "./Work.css";
import WorkCard from "../WorkCard/WorkCard";
import image from "../../images/sample1.jpeg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const handleDragStart = (e) => e.preventDefault();
const items = [
  <div class="center">
    <WorkCard />
  </div>,
  <div class="center">
    <WorkCard />
  </div>,

  <div class="center">
    <WorkCard />
  </div>,

  <div class="center">
    <WorkCard />
  </div>,

  <div class="center">
    <WorkCard />
  </div>,
  <div class="center">
    <WorkCard />
  </div>,
  <div class="center">
    <WorkCard />
  </div>,
  <div class="center">
    <WorkCard />
  </div>,
  <div class="center">
    <WorkCard />
  </div>,
];

function Work() {
  return (
    <section id="work" className="work section">
      <div className="work__container container">
        <div className="work__title__container">
          <h1 className="work__title">
            <span aria-hidden="true">02</span>Work
          </h1>
        </div>
        <div className="about__content">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            autoPlayInterval={1500}
            infinite={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
