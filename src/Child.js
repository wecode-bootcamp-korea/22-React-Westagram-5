import React, { Component } from "react";

class Child extends Component {
  render() {
    const { titleColor, changeColor } = this.props;

    return (
      <>
        <h2 style={{ color: titleColor }}>Child 컴포넌트</h2>;
        <button onClick={changeColor}>자식</button>
      </>
    );
  }
}

export default Child;
