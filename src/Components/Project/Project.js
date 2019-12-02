import React, { Component } from "react";
import "./Project.css";
import phi from "../../Assets/placeholder.jpg";

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
  render() {
    let overlayClasses = "project-box-overlay hidden";
    if (!this.state.hover) {
      overlayClasses = "project-box-overlay";
    }
    if (this.props.galaxy) {
      return (
        <div className="project-box-container">
          <div
            className={overlayClasses}
            onMouseEnter={this.isMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></div>
          <h1>Galaxy Dawg</h1>
          <img src={phi} alt="whoops"></img>
        </div>
      );
    }
  }
}

export default Project;
