import React, { Component } from "react";

class Comment extends Component {
  render() {
    // console.log("Comment>>>>", this.props.name);

    // console.log("Comment props: ", this.props);
    return (
      <div>
        <li>
          <a href="/Mainchoi">{this.props.commentUserName} </a>
          {this.props.commentContent}
        </li>
      </div>
    );
  }
}

export default Comment;
