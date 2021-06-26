import React, { Component } from "react";
import "./Aside.scss";

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <aside>
          <div className="profile">
            <img
              alt="icon_profile"
              className="profileIcon"
              src="/images/minjae/icon_profiletitle.PNG"
            />
            <div className="profileText">
              <span className="nickName2">wecode_22th_bootcamp</span>
              <span className="company">WeCode | 위코드</span>
            </div>
          </div>
          <div className="story">
            <h2 class="storyTitle">스토리</h2>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
          </div>
          <div className="story">
            <h2 class="storyTitle">회원님을 위한 추천</h2>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
            <p className="asideName">
              <img
                alt="icon_profile"
                src="/images/minjae/icon_profiletitle.PNG"
              />
              &nbsp;닉네임
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

export default Aside;
