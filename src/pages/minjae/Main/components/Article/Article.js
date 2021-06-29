import React, { Component } from "react";
import "./Article.scss";
import Comment from "./Comment";

class Article extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      commentBtnOpacity: "30%",
      iptCommentValue: "",
      commentList: [],
    };
  }

  handleCommentBox = (e) => {
    this.setState({ iptCommentValue: e.target.value });

    this.state.iptCommentValue.length > 0
      ? this.setState({ disabled: false, commentBtnOpacity: "100%" })
      : this.setState({ disabled: true, commentBtnOpacity: "30%" });
  };

  handleCommentBtn = (e) => {
    e.preventDefault();
    this.setState({
      commentList: this.state.commentList.concat([this.state.iptCommentValue]),
      iptCommentValue: "",
    });
  };

  addKeyEnter = (e) => e.key === "Enter" && this.handleCommentBtn;

  render() {
    return (
      <div className="Article">
        <article>
          <div className="articleHeader">
            <img
              className="articleFeedIcon"
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
          <div className="like">좋아요 12,981개</div>
          <ul className="feedComment">
            {this.state.commentList.map((comment, idx) => {
              return <Comment key={idx} comment={comment} />;
            })}
          </ul>
          <form className="comment">
            <input
              onKeyPress={this.addKeyEnter}
              className="commentBox"
              onKeyUp={this.handleCommentBox}
              onChange={this.handleCommentBox}
              type="text"
              placeholder="댓글 달기.."
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

// <댓글 기능 구현>

// state에 초기의 텍스트 value 값 설정
// input 텍스트 정보를 받아오는 함수 생성
// 사용할 이벤트 함수 생성
// onChange 속성 추가
