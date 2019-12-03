import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
    this.isMouseEnter = this.isMouseEnter.bind(this);
  }

  isMouseEnter = () => {
    this.setState({ hover: true });
  };
  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  //TODO:
  //FIGURE OUT HOW TO MAKE IMAGE GROW SLIGHTLY ON HOVER
  //on hover hide name, show description and button linkss
  render() {
    let hidethis = "hidden-words";
    if (!this.state.hover) {
      hidethis = "show-title";
    }
    if (this.props.galaxy) {
      return (
        <div className="project-container">
          <div className="project-box-container galaxy">
            <div
              className="project-box-overlay galaxy-overlay"
              onMouseEnter={this.isMouseEnter}
              onMouseLeave={this.onMouseLeave}
            ></div>
            <h1 className={hidethis}>Galaxy Dawg</h1>
          </div>
          <div className="about-project-container">
            <h4 className="about-span">
              <span>Galaxy Dawg</span> is a top down shoot-em-up style single
              player game playable on desktop and mobile devices. Inspired by
              classic games like "Space Invaders" and "Raiden"; Galaxy Dawg
              allows you to play as ace space pilot "Commander Pup" in his
              mission to protect his home planet from alien invaders.
            </h4>
          </div>
        </div>
      );
    }
    if (this.props.delicious) {
      return (
        <div className="project-container">
          <div className="project-box-container delicious">
            <div
              className="project-box-overlay delicious-overlay"
              onMouseEnter={this.isMouseEnter}
              onMouseLeave={this.onMouseLeave}
            ></div>
            <h1 className={hidethis}>DeliCious</h1>
          </div>
          <div className="about-project-container">
            <h4 className="about-span">
              <span>DeliCious</span> is a top down shoot-em-up style single
              player game playable on desktop and mobile devices. Inspired by
              classic games like "Space Invaders" and "Raiden"; Galaxy Dawg
              allows you to play as ace space pilot "Commander Pup" in his
              mission to protect his home planet from alien invaders.
            </h4>
          </div>
        </div>
      );
    }
  }
}

export default Project;

// create animated gif cartoon of me that leads to contact opens contact page
