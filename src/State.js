import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();

    this.state = {
      info: [
        {
          id: 0,
          nickName: "test1",
          content: "테스트1",
        },
        {
          id: 1,
          nickName: "test2",
          content: "테스트2",
        },
      ],
    };
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment = (data) => {
    const { info } = this.state;
    this.setState({
      info: info.concat({
        id: this.id++,
        ...data,
      }),
    });
  };

  render() {
    const { info } = this.state;

    return (
      <div>
        <form onCreate={this.handleComment} />
        <div>안녕하세요</div>
        {JSON.stringify(info)}
      </div>
    );
  }
}

export default State;
