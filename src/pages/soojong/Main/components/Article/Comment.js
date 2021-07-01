import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li className="CommentList">
            <span>{this.props.name}</span>
            {this.props.comment}
          </li>
        </ul>
      </>
    );
  }
}

export default Comment;
