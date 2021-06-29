import React, { Component } from "react";

class Comment extends Component {
  render() {
    // console.log("Comment>>>>", this.props.name);
    return (
      <div>
        <li>
          <a href="/Mainchoi">{this.props.name} </a>
          {this.props.comment}
        </li>
      </div>
    );
  }
}

export default Comment;
