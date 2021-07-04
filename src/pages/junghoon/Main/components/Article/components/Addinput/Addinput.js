import React, { Component } from "react";

export default class Addinput extends Component {
  render() {
    return (
      <>
        <div className="commentSet">
          <input
            className="input"
            type="text"
            id="commentBoard"
            placeholder="댓글 달기..."
            value={this.props.commentValuble}
            onChange={this.props.commentInsert}
            onKeyPress={this.props.enterPush}
          />
          <button className="itemAdd" onClick={this.props.commentSend}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </>
    );
  }
}
