import React, { Component } from "react";
import "./Aside.scss";

class Aside extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="profileSetRight">
          <div className="dieterRamsRight">
            <img
              alt="Dieter Rams Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pcQ9Q1D3JOFDrDeZfWB8hNPQLUBrLJv85pPyaF85njqOPgMQI97xDJITAqQIR-t6G9Q&usqp=CAU"
            />
          </div>
          <div className="westaIdRightSet">
            <p className="westaIdRight">dieter_rams</p>
            <p>Braun-Dessau-Germany</p>
          </div>
        </div>
        <div className="storyBox">
          <div className="storyBoxNav">
            <p className="storyBoxTitle">스토리</p>
            <p className="storyBoxSeeAll">모두 보기</p>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="wassily kandinsky"
                src="https://artpil.com/wp-content/uploads/2017/06/Wassily-Kandinsky-350bio.jpg"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">wassily_kandinsky</p>
              <p className="westaStoryTime">10분전</p>
            </div>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="Bauhaus Dessau"
                src="https://i.pinimg.com/originals/15/56/76/155676b92c6c2e44108a8ed51a3056dc.jpg"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">dessau_foundation</p>
              <p>16분전</p>
            </div>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="Sebastian Weiss"
                src="https://64.media.tumblr.com/57e5fb741979e549ac8c6f52651407b3/tumblr_nibmrlWFQi1sdyz7uo1_1280.jpg"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">sebastian_weiss</p>
              <p>20분전</p>
            </div>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="post poetics"
                src="https://i2.wp.com/postpoetics.kr/ppwp/wp-content/uploads/2020/05/COVER-36.jpg?fit=1200%2C1707&ssl=1"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">post_poetics</p>
              <p>30분전</p>
            </div>
          </div>
        </div>
        <div className="followRecommendBox">
          <div className="storyBoxNav">
            <p className="storyBoxTitle">회원님을 위한 추천</p>
            <p className="storyBoxSeeAll">모두 보기</p>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="musk"
                src="https://tago.kr/images/sub/TG300-D02_img01.png"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">nylonMusk</p>
              <p className="westaStoryTime">으이~</p>
            </div>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="dodge"
                src="https://nimage.g-enews.com/phpwas/restmb_allidxmake.php?idx=5&simg=20210505102219067819ecba8d8b8617764132.jpg"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">dodge</p>
              <p>멍멍~</p>
            </div>
          </div>
          <div className="profileSetStory">
            <div className="bauhausLogoStory">
              <img
                alt="Let's Go"
                src="https://image.edaily.co.kr/images/Photo/files/NP/S/2021/04/PS21042001209.jpg"
              />
            </div>
            <div className="westaIdStorySet">
              <p className="westaIdStory">Let's go~</p>
              <p>갈끄니까~</p>
            </div>
          </div>
        </div>
        <footer className="policyInfo">
          <span>
            Westagram 정보 · 지원 · 홍보 센터 · API · <br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
            <br />
            <br />ⓒ 2021 WESTAGRAM
          </span>
        </footer>
      </div>
    );
  }
}

export default Aside;
