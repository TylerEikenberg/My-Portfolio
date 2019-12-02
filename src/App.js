import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ImageBox from "./Components/ImageBox/ImageBox";
import placeholder from "./Assets/placeholder.jpg";
import placeholder2 from "./Assets/placeholder2.jpg";
import TextBox from "./Components/TextBox/TextBox";
import Project from "./Components/Project/Project";
AOS.init();

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="pewter-box"></div>
        <div className="title-container">
          <div className="name-container">
            <div className="click-icons-container">
              <svg className="hvr-grow" viewBox="0 0 24 24">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              <svg className="hvr-grow" viewBox="0 0 24 24">
                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
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
        <div className="top-bio">
          <TextBox intro="true" />
          <div
            className="middle-images"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <TextBox about="true" />
            <ImageBox image={placeholder2} type="middle" />
          </div>
        </div>
        <div
          className="box-beige"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div className="project-header-title">
            <h1>projects</h1>
          </div>
        </div>
        <div className="projects-container">
          <Project galaxy="true" />
          <Project delicious="true" />
          <Project delicious="true" />
        </div>
      </div>
    );
  }
}

export default App;
