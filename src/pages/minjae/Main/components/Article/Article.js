import React, { Component } from "react";
import "./Article.scss";

class Article extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      commentBtnOpacity: "30%",
      iptCommentValue: "",
    };
  }

  handleCommentBox = (e) => {
    this.setState({ iptCommentValue: e.target.value });
  };

  handleCommentBtn = () => {};

  render() {
    return (
      <div className="Article">
        <article>
          <div className="articleHeader">
            <img
              alt="icon_profile"
              src="/images/minjae/icon_profiletitle.png"
            />
            <span className="nickName">wecode_22th</span>
          </div>
          <img
            alt="mainFeed"
            className="mainFeed"
            src="/images/minjae/feed.png"
          />
          <div className="feedIcon">
            <span className="fi">
              <img alt="heart" src="/images/minjae/icon_heart.png" />
            </span>
            <span className="fi">
              <img alt="comment" src="/images/minjae/icon_comment.png" />
            </span>
            <span className="fi">
              <img alt="share" src="/images/minjae/icon_share.png" />
            </span>
          </div>
          <ul className="feedComment" />
          <form className="comment">
            <input
              type="text"
              className="commentBox"
              placeholder="댓글 달기.."
              onInput={this.handleCommentBox}
              value={this.state.iptCommentValue}
            />
            <button
              className="commentBtn"
              style={{ opacity: this.state.commentBtnOpacity }}
              disabled={this.state.disabled}
              onClick={this.handleCommentBtn}
            >
              게시
            </button>
          </form>
        </article>
      </div>
    );
  }
}

export default Article;
