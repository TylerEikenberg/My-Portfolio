import React, { Component } from "react";
import "./Project.css";
import galaxydawg from "../../Assets/galaxydawg.jpg";

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
    let overlayClasses = "project-box-overlay hidden";
    let hidethis = "hidden-words";
    if (!this.state.hover) {
      overlayClasses = "project-box-overlay";
      hidethis = "show-title";
    }
    if (this.props.galaxy) {
      return (
        <div className="project-box-container">
          <div
            className={overlayClasses}
            onMouseEnter={this.isMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></div>
          <h1 className={hidethis}>Galaxy Dawg</h1>
          {this.state.hover ? (
            <h4>
              Galaxy Dawg is a top down shoot-em-up style single player game
              playable on desktop and mobile devices. Inspired by classic games
              like "Space Invaders" and "Raiden"; Galaxy Dawg allows you to play
              as ace space pilot "Commander Pup" in his mission to protect his
              home planet from alien invaders.
            </h4>
          ) : null}

          <img src={galaxydawg} alt="whoops"></img>
        </div>
      );
    }
    if (this.props.delicious) {
      return (
        <div className="project-box-container">
          <div
            className={overlayClasses}
            onMouseEnter={this.isMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></div>
          <h1>DeliCious</h1>
          <img src={galaxydawg} alt="whoops"></img>
        </div>
      );
    }
  }
}

export default Project;

// create animated gif cartoon of me that leads to contact opens contact page
