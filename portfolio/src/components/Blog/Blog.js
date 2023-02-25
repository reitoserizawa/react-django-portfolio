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
        <section id="blog" className="blog section">
          <div className="blog__container container">
            <h1>
              <span aria-hidden="true">03</span>Blog
            </h1>
          </div>
          <div className="blog__content">
            <VerticalCarousel />
          </div>
        </section>
      )}
    </>
  );
}

export default Blog;
