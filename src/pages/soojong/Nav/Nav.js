import React from "react";
import "./Nav.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav_bar">
          <div className="navContainer">
            <div className="logo">
              <img
                src="images/soojong/instagram.png"
                className="insta_icon"
                alt="icon"
              />
              <h1 className="logo_text">westagram</h1>
            </div>
            <div className="search">
              <div className="feed_search">
                <input
                  type="text"
                  id="input_search"
                  name="feedSearch"
                  className="input_search"
                  placeholder="검색"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className="iconRight">
              <img
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png "
                alt="explore"
                className="explore_icon"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
                class="heart_icon"
              />
              <img
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="mypage"
                className="mypage_icon"
              />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
