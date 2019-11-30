import React, { Component } from "react";
import "./ImageBox.css";
class ImageBox extends Component {
  render() {
    let imageBoxClass = "image-box-container";
    if (this.props.type === "middle") {
      imageBoxClass = "image-box-container-regular";
    }
    return (
      <div className={imageBoxClass}>
        <img
          className="image-properties"
          alt="not found"
          src={this.props.image}
        ></img>
      </div>
    );
  }
}

export default ImageBox;
