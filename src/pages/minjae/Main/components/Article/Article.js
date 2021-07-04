import React, { Component } from "react";
import "./Article.scss";
import Feed from "./Feed";

class Article extends Component {
  constructor() {
    super();

    this.state = {
      feedList: [],
      newComment: "",
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
  }

  feedListConcat = (feedId, iptCommentValue) => {
    const targetId = feedId - 1;
    const newComment = [
      {
        commentId: this.state.feedList[targetId].comment.length + 1,
        commentUserName: "rious275",
        commentContent: iptCommentValue,
        isLiked: true,
        likeCount: "1",
      },
    ];

    // 1. feedList를 카피한다.
    // 2. 카피한 데이터를 코멘트로 추가한다.

    const newFeedList = [...this.state.feedList];

    newFeedList[targetId] = {
      ...newFeedList[targetId],
      comment: newFeedList[targetId].comment.concat(newComment),
    };

    this.setState({
      feedList: newFeedList,
    });
  };

  render() {
    return (
      <div>
        {this.state.feedList.map((feed) => {
          return (
            <>
              <Feed
                parent={this.parent}
                key={feed.id}
                feedListConcat={this.feedListConcat}
                feed={feed}
                comment={feed.comment}
              />
            </>
          );
        })}
      </div>
    );
  }
}

export default Article;
