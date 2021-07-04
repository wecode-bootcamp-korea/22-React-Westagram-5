import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <>
        <div className="profileSet">
          <div className="bauhausLogo">
            <img
              alt="Bauhaus Dessau Logo"
              src="data:image/png;base64,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"
            />
          </div>
          <div>
            <p className="westaId">{this.props.userId}</p>
            <p>Bauhaus Dessau-Dessau</p>
          </div>
        </div>
        <div className="postingImage">
          <img src={this.props.imgSrc} alt="Posting" />
        </div>
        <div className="postingBtn">
          <div className="postingBtnLeft">
            <img
              className="heart"
              alt="Like Button"
              src="https://image.flaticon.com/icons/png/512/1216/1216649.png"
            />
            <img
              className="commentBtn"
              alt="Comment Button"
              src="https://image.flaticon.com/icons/png/512/2089/2089157.png"
            />
            <img
              className="uploadBtn"
              alt="Upload Button"
              src="https://image.flaticon.com/icons/png/512/747/747416.png"
            />
          </div>
          <img
            className="bookMarkBtn"
            alt="Bookmark Button"
            src="https://image.flaticon.com/icons/png/512/1159/1159580.png"
          />
        </div>
        <div className="like">
          <div className="bauhausLogoSmall">
            <img
              alt="Bauhaus Dessau Logo"
              src="data:image/png;base64,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"
            />
          </div>
          <p className="westaIdSmall">bauhaus_dessau_foundation</p>
          <p>님 외 654명이 좋아합니다.</p>
        </div>
        <div className="postingWd">
          <p className="westaIdComment">bauhaus_dessau_foundation</p>
          <span>
            The Bauhaus Cooperation Berlin Dessau Weimar invites online to the
            "Workshops for the Whole Earth" on June 4 and 5, 2021.
          </span>
          <p className="commentTime">54분전</p>
        </div>
      </>
    );
  }
}

export default Feed;
