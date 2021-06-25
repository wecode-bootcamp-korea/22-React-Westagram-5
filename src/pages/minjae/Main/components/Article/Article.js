import React, { Component } from "react";
import "./Article.scss";

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <article>
          <div className="articleHeader">
            <img alt="icon_profile" src="/images/minjae/icon_profile.png" />
            <span className="nickName">wecode_22th</span>
          </div>
          <img
            alt="mainFeed"
            className="mainFeed"
            src="/images/minjae/feed.png"
          />
          <div className="feedIcon">
            <span className="fi">
              <img alt="heart" src="/images/minjae/heart-regular.svg" />
            </span>
            <span className="fi">
              <img alt="comment" src="/images/minjae/comment-regular.svg" />
            </span>
            <span className="fi">
              <img alt="share" src="/images/minjae/share-square-solid.svg" />
            </span>
          </div>
          <ul className="feedComment" />
          <form className="comment">
            <input
              type="text"
              className="commentBox"
              placeholder="댓글 달기.."
            />
            <button className="commentBtn">게시</button>
          </form>
        </article>
      </div>
    );
  }
}

export default Article;
