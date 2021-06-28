import React from "react";
import "../../../../../styles/common.scss";
import "../../../../../styles/reset.scss";
import "../Article/Article.scss";

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      comments: [],
    };
  }

  InputValue = (e) => {
    this.setState({ comment: e.target.value });
  };

  enterComments = (e) => {
    if (e.key === "Enter") {
      this.uploadComments();
      e.target.value = "";
    }
  };

  uploadComments = () => {
    this.state.comments.push({ text: this.state.comment });
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <article>
          <div className="article_header">
            <div className="profile_box">
              <img
                src="images/soojong/unsplash.jpg"
                alt="feedprofile"
                className="feed_profile"
              />
            </div>
            <p>asd_fg</p>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <img src="images/soojong/paris.jpg" alt="paris" />

          <div className="feed_icon">
            <div className="feed_icon_left">
              <i className="fas fa-heart fa-lg"></i>
              <i className="far fa-comment fa-lg"></i>
              <i className="far fa-share-square fa-lg"></i>
            </div>
            <i className="far fa-bookmark fa-lg"></i>
          </div>
          <div className="like_people">
            <div className="like_people_profile">
              <img src="images/soojong/user1.jpg" alt="like" />
            </div>
            <span className="like_text">
              <span className="boldText">ssssss_yyy</span>님{" "}
              <span className="boldText">외 10명</span>이 좋아합니다.
            </span>
          </div>
          <div className="user_commentbox">
            <span className="comment_id">Tiramisu_kung</span>
            <span className="comment_text">나도 가고싶다! </span>
          </div>
          <div className="comment_time">
            <p>3시간 전</p>
          </div>

          <div className="commentList">
            {this.state.comments.map((e) => (
              <li>
                <span>Soox_jk</span> {e.text}
              </li>
            ))}
            <span className="new_comment"></span>
          </div>

          <div className="commentbox">
            <input
              type="text"
              className="input_comment"
              id="input_comment"
              placeholder="댓글 달기 ..."
              onChange={this.InputValue}
              onKeyPress={this.enterComments}
            />
            <button
              type="submit"
              className="submit_button"
              id="comment_submit"
              onClick={this.uploadComments}
            >
              게시
            </button>
          </div>
        </article>
      </>
    );
  }
}
export default Article;
