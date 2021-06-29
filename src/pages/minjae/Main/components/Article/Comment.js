import React, { Component } from "react";

class Comment extends Component {
  render() {
    console.log(this.props.comment);
    return (
      <div>
        <li>
          <a href="/Mainchoi">rious275 </a>
          {this.props.comment}
        </li>
      </div>
    );
  }
}

export default Comment;
