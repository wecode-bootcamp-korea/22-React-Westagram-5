import React from "react";
import "./Feed.scss";

class Feed extends React.Component {
  render() {
    return (
      <>
        <div className="article_header">
          <div className="profile_box">
            <img
              src={this.props.profileImg}
              alt="feedprofile"
              className="feed_profile"
            />
          </div>
          <p>{this.props.profileId}</p>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <img src={this.props.postImg} alt="paris" />

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
            <span className="boldText">{this.props.likeId}</span>님
            <span className="boldText">외 10명</span> 이 좋아합니다.
          </span>
        </div>
        <div className="user_commentbox">
          <span className="comment_id">Tiramisu_kung</span>
          <span className="comment_text">나도 가고싶다! </span>
        </div>
        <div className="comment_time">
          <p>3시간 전</p>
        </div>
      </>
    );
  }
}

export default Feed;
