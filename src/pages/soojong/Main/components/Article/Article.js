import React from "react";
import Comment from "../Article/Comment";
import COMMENTDATA from "./commentData";
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

  componentDidMount() {
    this.setState({
      commentData: COMMENTDATA,
    });
  }

  InputValue = (e) => {
    this.setState({ comment: e.target.value });
  };

  enterComments = (e) => {
    if (e.key === "Enter") {
      this.uploadComments();
    }
  };

  uploadComments = () => {
    this.setState({
      comments: this.state.comments.concat({ text: this.state.comment }),
      comment: "",
    });
  };

  addComment = (e) => {
    e.prevenDefault();
    const { commentData, comment } = this.state;
    this.setState({
      commentData: [
        ...commentData,
        {
          id: commentData.length + 1,
          userId: "jay",
          content: comment,
        },
      ],
      commentValue: "",
    });
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
            <Comment commentList={this.state.comments} />
          </div>

          <div className="commentbox">
            <input
              type="text"
              className="input_comment"
              id="input_comment"
              placeholder="댓글 달기 ..."
              onChange={this.InputValue}
              onKeyPress={this.enterComments}
              value={this.state.comment}
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
