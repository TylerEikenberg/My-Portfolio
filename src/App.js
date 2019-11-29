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
            <h1>Tyler Eikenberg</h1>
          </div>
          <div className="subname-container">
            <h3>Software Engineer</h3>
          </div>
        </div>
        <ImageBox image={placeholder} />
      </div>
    );
  }
}

export default App;
