import React, { Component } from "react";
import axios from "axios";
import Icon from "./images/bot-icon.png";

import "./App.css";

class App extends Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="heading">
          <div className="bot">
            <img src={Icon} alt="bot-icon" width="110" />
          </div>
          <div className="title">
            <h1>
              Nice to see you. I'am Advice-Bot created to give best advices. My
              friends call me Oliver.
            </h1>
          </div>
        </div>
        <div className="card border">
          <h1 className="advice">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give Advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
