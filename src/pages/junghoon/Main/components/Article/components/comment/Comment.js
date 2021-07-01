import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <>
        <li className="commentBox">
          <span className="westaId">{this.props.name} </span>
          {this.props.comment}
        </li>
      </>
    );
  }
}

export default Comment;
