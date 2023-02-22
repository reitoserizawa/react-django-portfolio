import "./BlogCard.css";

function BlogCard() {
  return (
    <article class="article-card">
      <div class="img-box">
        <img src="./images/drawers.jpg" alt="" class="article-banner" />
      </div>

      <div class="article-content">
        <a href="#">
          <h3 class="article-title">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h3>
        </a>

        <p class="article-text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div class="acticle-content-footer">
          <div class="author">
            <img
              src="./images/avatar-michelle.jpg"
              alt=""
              class="author-avater"
            />

            <div class="author-info">
              <a href="#">
                <h4 class="author-name">Michelle Appleton</h4>
              </a>
              <div class="publish-date">28 Jun 2020</div>
            </div>
          </div>

          <div class="share">
            <button class="share-button">
              <ion-icon name="arrow-redo"></ion-icon>
            </button>

            <div class="share-option">
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
