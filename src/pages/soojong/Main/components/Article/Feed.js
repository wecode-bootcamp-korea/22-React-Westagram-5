import React from "react";

class Feed extends React.Component {
  render() {
    return (
      <>
        <div className="article_header">
          <div className="profile_box">
            <img
              src="/images/soojong/profileImg.jpg"
              alt="feedprofile"
              className="feed_profile"
            />
          </div>
          <p>asd_fg</p>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <img src="/images/soojong/paris.jpg" alt="paris" />

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
            <span className="boldText">ssss_yyy</span>님
            <span className="boldText">외 10명</span> 이 좋아합니다.
          </span>
        </div>
      </>
    );
  }
}

export default Feed;
