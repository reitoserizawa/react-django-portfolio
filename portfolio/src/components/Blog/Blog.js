import { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import Loading from "../Loading/Loading";

function Blog() {
  const [blogLoading, setBlogLoading] = useState(true);
  return (
    <>
      {blogLoading ? (
        <Loading
          title="Blog"
          setLoading={setBlogLoading}
          loading={blogLoading}
        />
      ) : (
        <section id="blog" className="blog section grid">
          <div className="blog__container">
            {/* <div className="blog__title__container container">
              <h1 className="blog__title">
                <span aria-hidden="true">03</span>Blog
              </h1>
            </div> */}
            <div className="blog__content">
              <div className="blog__title__container container">
                <h1 className="blog__title ">
                  <span aria-hidden="true">03</span>Blog
                </h1>
              </div>
              <VerticalCarousel />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Blog;
