import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

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
      </div>
    );
  }
}

export default App;
