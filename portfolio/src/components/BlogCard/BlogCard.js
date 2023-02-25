import { useState, useEffect } from "react";
import "./BlogCard.css";
import image from "../../images/about__blob.jpg";
import { Spring } from "react-spring/renderprops";

function BlogCard({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const [toggleShare, setToggleShare] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause === false) {
        moveSlide(1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <div
          className="slide_container"
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <article class="article-card">
            <div class="img-box">
              <img
                src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg"
                alt=""
                class="article-banner"
              />
            </div>

            <div class="article-content">
              <a href="#">
                <h3 class="article-title">
                  Authentication Steps for Ruby on Rails
                </h3>
              </a>

              <p class="article-text">
                When you are creating a website, it is very common to have the
                authentication features, such as log-in, log-out and sign-up.
                These features are much easier to code using Ruby on Rails. In
                this article, I will explain how to make these features step by
                step.
              </p>

              <div class="acticle-content-footer">
                <div class="author">
                  <img src={image} alt="" class="author-avater" />

                  <div class="author-info">
                    <a href="#">
                      <h4 class="author-name">Reito Serizawa</h4>
                    </a>
                    <div class="publish-date">11 Nov 2011</div>
                  </div>
                </div>

                <div class="share">
                  <button
                    class="share-button"
                    onClick={() => setToggleShare(!toggleShare)}
                  >
                    <ion-icon name="arrow-redo"></ion-icon>
                  </button>

                  <div
                    class={toggleShare ? "share-option active" : "share-option"}
                  >
                    <span>Share</span>

                    <a href="#">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="#">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="#">
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </Spring>
  );
}

export default BlogCard;
