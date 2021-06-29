import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map((e) => (
          <li>
            <span>Soox_jk</span> {e.text}
          </li>
        ))}
      </>
    );
  }
}

export default Comment;
