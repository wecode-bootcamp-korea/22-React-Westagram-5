import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    console.log(this.props.comments);
    return (
      <>
        {this.props.commentList.map((ele, index) => {
          return (
            <li className="commentBox">
              <span className="westaId">dieter_rams </span>
              {(ele, index)}
            </li>
          );
        })}
      </>
    );
  }
}

export default Comment;
