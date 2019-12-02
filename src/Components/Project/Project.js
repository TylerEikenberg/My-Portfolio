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
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            provident iste libero sunt quae explicabo corporis magni accusantium
            amet natus nulla culpa tempore, quisquam atque voluptates,
            architecto omnis tempora ab.
          </h4>
          <img src={phi} alt="whoops"></img>
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
          <img src={phi} alt="whoops"></img>
        </div>
      );
    }
  }
}

export default Project;
