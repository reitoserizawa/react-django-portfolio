import WorkCard from "../WorkCard/WorkCard";
import "./Work.css";

function Work() {
  const n = 8; // Or something else

  [...Array(n)].map((e, i) => <WorkCard key={i} />);

  return (
    <section id="work" className="work section">
      <div className="work__container container grid">
        <div className="work__title__container">
          <h1 className="work__title">
            <span aria-hidden="true">02</span>Work
          </h1>
        </div>
        <div className="work__content grid">
          <div className="work__content_item">
            <WorkCard />
          </div>
          <div className="work__content_item">
            <WorkCard />
          </div>
          <div className="work__content_item">
            <WorkCard />
          </div>
          <div className="work__content_item">
            <WorkCard />
          </div>
          <div className="work__content_item">
            <WorkCard />
          </div>
          <div className="work__content_item">
            <WorkCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;

// <section id="work" className="work section">
//   <div className="work__container container grid">
//     <div className="work__title__container">
//       <h1 className="work__title">
//         <span aria-hidden="true">02</span>Work
//       </h1>
//     </div>
