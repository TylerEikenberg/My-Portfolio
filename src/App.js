import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ImageBox from "./Components/ImageBox/ImageBox";
import placeholder from "./Assets/placeholder.jpg";
AOS.init();

class App extends Component {
  render() {
    return (
      <div>
        <div className="title-container">
          <div className="name-container">
            <div className="click-icons-container">
              <svg viewBox="0 0 24 24">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </div>
            <h1>tyler eikenberg</h1>
          </div>
          <div className="subname-container">
            <h3>Software Engineer</h3>
          </div>
        </div>
        <div className="title-image-container">
          <ImageBox image={placeholder} />
        </div>
      </div>
    );
  }
}

export default App;
