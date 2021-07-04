import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="navBarBorder">
          <div className="navBar">
            <div className="weLogo">
              <img
                alt="Westagram Logo"
                src="https://image.flaticon.com/icons/png/512/1384/1384031.png"
              />
              <span className="westaWord">Westagram</span>
            </div>
            <div className="searchBarSet">
              <input type="text" id="searchBar" placeholder="검색" />
            </div>
            <div className="iconSet">
              <img
                alt="person"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
              <img
                alt="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                alt="compass"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
