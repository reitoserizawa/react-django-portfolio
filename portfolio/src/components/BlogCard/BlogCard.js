import { useState } from "react";
import "./BlogCard.css";
import image from "../../images/about__blob.jpg";

function BlogCard() {
  const [toggleShare, setToggleShare] = useState(false);

  return (
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
          <h3 class="article-title">Authentication Steps for Ruby on Rails</h3>
        </a>

        <p class="article-text">
          When you are creating a website, it is very common to have the
          authentication features, such as log-in, log-out and sign-up. These
          features are much easier to code using Ruby on Rails. In this article,
          I will explain how to make these features step by step.
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

            <div class={toggleShare ? "share-option active" : "share-option"}>
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
  );
}

export default BlogCard;
