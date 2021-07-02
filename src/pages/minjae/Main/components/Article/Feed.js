import React, { Component } from "react";
import Comment from "./Comment";

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      iptCommentValue: "",
      likeCount: "",
    };
  }

  componentDidMount() {
    console.log(this.props.feed);
  }
  handleCommentBox = (e) => {
    this.setState({ iptCommentValue: e.target.value });
  };

  handleCommentBtn = (e) => {
    e.preventDefault();

    this.props.feedListConcat();

    this.setState({
      iptCommentValue: "",
    });
  };
  // concat 돌리는 함수가 여기서는 호출만되게 부모에서 함수를 만든다.

  render() {
    const { iptCommentValue } = this.state;
    const disabled = iptCommentValue.length > 0 ? false : true;

    return (
      <div className="Article">
        <article>
          <div className="articleHeader">
            <img
              className="articleFeedIcon"
              alt="icon_profile"
              src={this.props.feed.profileImg}
            />
            <span className="nickName">{this.props.feed.profileNickName}</span>
          </div>
          <img
            alt="mainFeed"
            className="mainFeed"
            src={this.props.feed.feedImg}
          />
          <div className="feedIcon">
            <span className="fi">
              <img
                alt="heart"
                src={this.props.feed.iconHeart}
                onClick={this.handleLike}
              />
            </span>
            <span className="fi">
              <img alt="comment" src={this.props.feed.iconComment} />
            </span>
            <span className="fi">
              <img alt="share" src={this.props.feed.iconShare} />
            </span>
          </div>
          <div className="like">좋아요 {this.props.feed.likeCount}개</div>
          <ul className="feedComment">
            {/* 조건부 렌더링 */}

            {console.log(this.props.feed)}
            {this.props.feed.comment && (
              <span>
                <span>{this.props.feed.comment[0].commentUserName}</span>
                <span>{this.props.feed.comment[0].commentContent}</span>
              </span>
            )}

            {/* {this.props.feed.comment.map((feed) => {
              return (
                <Comment
                  key={feed.commentId}
                  comment={feed}
                  commentContent={feed.commentContent}
                  commentUserName={feed.commentUserName}
                />
              );
            })} */}
          </ul>
          <span className="commentTime">10시간 전</span>
          <form className="comment">
            <input
              className="commentBox"
              onChange={this.handleCommentBox}
              type="text"
              placeholder="댓글 달기.."
              value={iptCommentValue}
            />
            <button
              className={`commentBtn ${
                iptCommentValue.length > 0 ? "on" : "off"
              }`}
              disabled={disabled}
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

export default Feed;
