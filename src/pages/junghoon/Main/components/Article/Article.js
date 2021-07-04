import React from "react";
import Comment from "./components/comment/Comment";
import Feed from "./components/Feed/Feed";
import Addinput from "./components/Addinput/Addinput";
import "./Article.scss";

class Article extends React.Component {
  constructor() {
    super();

    this.state = {
      commentValue: "",
      commentList: [],
    };
  }

  componentDidMount() {
    this.setState({
      commentList: this.props.comment,
    });
  } //왜 썼누

  commentInput = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  // commentSubmit = () => {
  //   this.setState({
  //     commentList: this.state.commentList.concat([this.state.commentValue]),
  //     commentValue: "",
  //   });
  // };
  // enter키로 입력

  enterPress = (e) => {
    if (e.key === "Enter") {
      this.commentSubmit(e);
    }
  };

  commentSubmit = (e) => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: "dieter_rams",
          content: commentValue,
        },
      ],
      commentValue: "",
    });
  };

  render() {
    const { commentList, commentValue } = this.state;

    return (
      <div className="feeds">
        <article className="articleAll">
          <Feed
            feedId={this.props.feedId}
            userId={this.props.userId}
            imgSrc={this.props.imgSrc}
          />
          {this.state.commentList.map((eve) => {
            return (
              <Comment key={eve.id} name={eve.userName} comment={eve.content} />
            );
          })}
          <Addinput
            commentValuble={this.state.commentValue}
            commentInsert={this.commentInput}
            enterPush={this.enterPress}
            commentSend={this.commentSubmit}
          />
        </article>
      </div>
    );
  }
}

export default Article;
