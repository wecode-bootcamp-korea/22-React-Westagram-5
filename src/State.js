import React, { Component } from "react";
import Child from "./Child";

class State extends Component {
  constructor() {
    super();

    this.state = {
      buttonColor: "violet",
      changeColor: "red",
    };
  }

  handleColor = () => {
    this.setState({
      buttonColor: "yellow",
    });
  };

  handleColor2 = () => {
    this.setState({
      changeColor: "yellow",
    });
  };

  render() {
    const { buttonColor, changeColor } = this.state;

    return (
      <>
        <h1 style={{ color: buttonColor }}>부모 텍스트</h1>
        <button onClick={this.handleColor}>change</button>
        <Child titleColor={changeColor} changeColor={this.handleColor2} />
      </>
    );
  }
}

export default State;
