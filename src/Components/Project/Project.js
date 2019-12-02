import React, { Component } from "react";
import "./Project.css";
import phi from "../../Assets/placeholder.jpg";

class Project extends Component {
  render() {
    return (
      <div className="project-box-container">
        <h1>Project name</h1>
        <img src={phi} alt="whoops"></img>
      </div>
    );
  }
}

export default Project;
