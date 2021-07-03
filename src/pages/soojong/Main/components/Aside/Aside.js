import React from "react";
import AsideData from "./AsideData";
import "../Aside/Aside.scss";
import "../Aside/AsideData.scss";

class Aside extends React.Component {
  render() {
    return (
      <>
        <div className="mainRight">
          <div className="myprofileInsta">
            <div className="myprofileBox">
              <img
                src="images/soojong/profileImg.jpg"
                alt="myProfile"
                className="myprofileImg"
              />
            </div>

            <div className="userInformation">
              <p className="useridProfile">Soox_jk</p>
              <p className="userName">Soojong Kim</p>
            </div>
          </div>

          <div className="sectionStory">
            <span className="storyTitle">
              <p className="story">스토리</p>
              <p className="viewAll">모두 보기</p>
            </span>
            <AsideData />
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
