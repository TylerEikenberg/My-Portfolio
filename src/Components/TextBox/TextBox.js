import React, { Component } from "react";
import "./TextBox.css";

class TextBox extends Component {
  render() {
    return (
      <div
        className="textbox-text-container"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        {this.props.intro ? (
          <h1>
            Hi! My name is <span>Tyler Eikenberg</span>. I'm a full-stack web
            developer and software engineer.
          </h1>
        ) : null}
        {this.props.about ? (
          <h3>
            I'm a developer/engineer based in <span>Maryland</span>. I strive to
            create digital content that is{" "}
            <span className="exciting">exciting</span> and{" "}
            <span className="exciting">innovative</span>. I'm determined to
            learn something new every day and use it to make myself better.
          </h3>
        ) : null}
      </div>
    );
  }
}

export default TextBox;
