import React from "react";
import "../../../../../styles/reset.scss";
import "../../../../../styles/common.scss";
import "../Aside/Aside.scss";

class Aside extends React.Component {
  render() {
    return (
      <>
        <div className="main_right">
          <div className="myprofile_insta">
            <div className="myprofile_box">
              <img
                src="images/soojong/profileImg.jpg"
                alt="myProfile"
                className="myprofile_img"
              />
            </div>

            <div className="user_information">
              <p className="userid_profile">Soox_jk</p>
              <p className="username">Soojong Kim</p>
            </div>
          </div>

          <div className="section_story">
            <span className="story_title">
              <p className="story">스토리</p>
              <p className="viewall">모두 보기</p>
            </span>
            <div className="user_story">
              <div className="other_profilebox">
                <img
                  src="images/soojong/user1.jpg"
                  alt="otherProfile"
                  className="other_profileimg"
                />
              </div>
              <div className="other_userinfo">
                <p className="other_userid">ssssss_yyy</p>
                <p className="other_username">2시간 전</p>
              </div>
            </div>
            <div className="user_story">
              <div className="other_profilebox">
                <img
                  src="images/soojong/user2.jpg"
                  alt="otherProfile"
                  className="other_profileimg"
                />
              </div>
              <div className="other_userinfo">
                <p className="other_userid">jo_and</p>
                <p className="other_username">1시간 전</p>
              </div>
            </div>
            <div className="user_story">
              <div className="other_profilebox">
                <img
                  src="images/soojong/user3.jpg"
                  alt="otherProfile"
                  className="other_profileimg"
                />
              </div>
              <div className="other_userinfo">
                <p className="other_userid">y_gunny</p>
                <p className="other_username">13분 전</p>
              </div>
            </div>
            <div className="user_story">
              <div className="other_profilebox">
                <img
                  src="images/soojong/user4.jpg"
                  alt="otherProfile"
                  className="other_profileimg"
                />
              </div>
              <div className="other_userinfo">
                <p className="other_userid">92mm</p>
                <p className="other_username">10분 전</p>
              </div>
            </div>
          </div>
          <div className="policyInfo">
            <p>
              westagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙
              개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
            </p>
            <span> © 2021 INSTAGRAM</span>
          </div>
        </div>
      </>
    );
  }
}

export default Aside;
