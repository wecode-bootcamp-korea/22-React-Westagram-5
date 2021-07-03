import React from "react";
import "../Aside/AsideData.scss";

export class AsideData extends React.Component {
  render() {
    return (
      <>
        <div className="userStory">
          <div className="otherProfilebox">
            <img
              src="images/soojong/user1.jpg"
              alt="otherProfile"
              className="otherProfileimg"
            />
          </div>
          <div className="otherUserInfo">
            <p className="otherUserId">ssssss_yyy</p>
            <p className="otherUserName">2시간 전</p>
          </div>
        </div>
        <div className="userStory">
          <div className="otherProfilebox">
            <img
              src="images/soojong/user2.jpg"
              alt="otherProfile"
              className="otherProfileimg"
            />
          </div>
          <div className="otherUserInfo">
            <p className="otherUserId">jo_and</p>
            <p className="otherUserName">1시간 전</p>
          </div>
        </div>
        <div className="userStory">
          <div className="otherProfilebox">
            <img
              src="images/soojong/user3.jpg"
              alt="otherProfile"
              className="otherProfileimg"
            />
          </div>
          <div className="otherUserInfo">
            <p className="otherUserId">y_gunny</p>
            <p className="otherUserName">13분 전</p>
          </div>
        </div>
        <div className="userStory">
          <div className="otherProfilebox">
            <img
              src="images/soojong/user4.jpg"
              alt="otherProfile"
              className="otherProfileimg"
            />
          </div>
          <div className="otherUserinfo">
            <p className="otherUserid">92mm</p>
            <p className="otherUsername">10분 전</p>
          </div>
        </div>
      </>
    );
  }
}

export default AsideData;
