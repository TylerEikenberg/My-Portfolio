import React, { Component } from "react";
import "./ImageBox.css";
class ImageBox extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="image-box-container">
        <img alt="not found" src={this.props.image}></img>
      </div>
    );
  }
}

export default ImageBox;
