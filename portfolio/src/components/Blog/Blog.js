import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: "1",
  },
  {
    key: 2,
    content: "2",
  },
  {
    key: 3,
    content: "2",
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    config: config.gentle,
  };

  render() {
    return (
      <section id="blog" className="blog section">
        <div className="blog__container container">
          <h1>
            <span aria-hidden="true">03</span>Blog
          </h1>
        </div>
        <div className="blog__content">
          <VerticalCarousel
            slides={slides}
            offsetRadius={this.state.offsetRadius}
            animationConfig={this.state.config}
          />
        </div>
      </section>
    );
  }
}
