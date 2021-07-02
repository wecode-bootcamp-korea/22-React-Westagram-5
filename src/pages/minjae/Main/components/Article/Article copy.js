import React, { Component } from "react";
import "./Article.scss";
import Feed from "./Feed";

class Article extends Component {
  constructor() {
    super();

    this.state = {
      feedList: [
        {
          id: "",
          profileImg: "",
          profileNickName: "",
          feedImg: "",
          iconHeart: "",
          iconComment: "",
          iconShare: "",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("/data/mainData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedList: data,
        });
      });

    const newFeed = [
      {
        id: this.state.feedList.length + 1,
        commentUserName: [this.states.feedList],
        commentContent: [this.state.feedList],
        isLiked: true,
      },
    ];

    this.setState({
      feedList: this.state.feedList.concat(newFeed),
    });
  }

  feedListConcat = () => {
    // const feedList = [...this.state.feedList, {id: }]

    const newComment = [
      {
        id: this.state.feedList.length + 1,
        commentUserName: "rious275",
        commentContent: [this.state.iptCommentValue],
        isLiked: true,
      },
    ];
    this.setState({
      feedList: this.state.feedList.concat(newComment),
      iptCommentValue: "",
    });
    // console.log(this.state.iptCommentValue);
  };

  render() {
    return (
      <div>
        {this.state.feedList.map((feed) => {
          return (
            <Feed
              feedListConcat={this.feedListConcat}
              feed={feed}
              comment={feed.comment}
              id={feed.id}
              profileImg={feed.profileImg}
              profileNickName={feed.profileNickName}
              feedImg={feed.feedImg}
              iconHeart={feed.iconHeart}
              iconComment={feed.iconComment}
              iconShare={feed.iconShare}
              // commentContent={feedList.commentContent}
              // commentUserName={feedList.commentUserName}
              isLiked={feed.isLiked}
              likeCount={feed.likeCount}
            />
          );
        })}
      </div>
    );
  }
}

export default Article;
