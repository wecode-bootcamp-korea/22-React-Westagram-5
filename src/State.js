import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();

    this.state = {
      titleColor: "red",
      subTitleColor: "yellow",
    };
  }

  render() {
    const { titleColor } = this.state;

    return (
      <>
        <h1 style={{ color: titleColor }}>부모 텍스트</h1>
        <button>change</button>
      </>
    );
  }
}

export default State;
